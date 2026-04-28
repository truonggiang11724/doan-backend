import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({
      messageId: 'test-message-id',
    }),
  }),
}));

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  const mockUser = {
    user_id: 1,
    username: 'testuser',
    email: 'test@example.com',
    password_hash: 'hashedpassword',
    phone: '1234567890',
    full_name: 'Test User',
    avatar_url: 'http://example.com/avatar.jpg',
    role: 'CUSTOMER',
    status: 'active',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            users: {
              findFirst: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
            },
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
            verify: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findByEmail', () => {
    it('should return user when email exists', async () => {
      jest
        .spyOn(prismaService.users, 'findFirst')
        .mockResolvedValue(mockUser);

      const result = await service.findByEmail(mockUser.email);

      expect(result).toEqual(mockUser);
      expect(prismaService.users.findFirst).toHaveBeenCalledWith({
        where: { email: mockUser.email },
      });
    });

    it('should return null when email does not exist', async () => {
      jest.spyOn(prismaService.users, 'findFirst').mockResolvedValue(null);

      const result = await service.findByEmail('nonexistent@example.com');

      expect(result).toBeNull();
    });
  });

  describe('findById', () => {
    it('should return user when id exists', async () => {
      jest
        .spyOn(prismaService.users, 'findUnique')
        .mockResolvedValue(mockUser);

      const result = await service.findById(mockUser.user_id);

      expect(result).toEqual(mockUser);
      expect(prismaService.users.findUnique).toHaveBeenCalledWith({
        where: { user_id: mockUser.user_id },
      });
    });

    it('should return null when id does not exist', async () => {
      jest.spyOn(prismaService.users, 'findUnique').mockResolvedValue(null);

      const result = await service.findById(999);

      expect(result).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new user with default role and status', async () => {
      const createdUser = {
        ...mockUser,
        role: 'CUSTOMER',
        status: 'active',
      };

      jest.spyOn(prismaService.users, 'create').mockResolvedValue(createdUser);

      const result = await service.create(
        mockUser.username,
        mockUser.email,
        mockUser.password_hash,
      );

      expect(result).toEqual(createdUser);
      expect(prismaService.users.create).toHaveBeenCalledWith({
        data: {
          username: mockUser.username,
          email: mockUser.email,
          password_hash: mockUser.password_hash,
          role: 'CUSTOMER',
          status: 'active',
        },
      });
    });
  });

  describe('update', () => {
    it('should update user profile with provided fields', async () => {
      const updateUserDto = {
        phone: '0987654321',
        username: 'updateduser',
        full_name: 'Updated Name',
        avatar_url: 'http://example.com/new-avatar.jpg',
      };

      const updatedUser = { ...mockUser, ...updateUserDto };
      jest.spyOn(prismaService.users, 'update').mockResolvedValue(updatedUser);

      const result = await service.update(mockUser.user_id, updateUserDto);

      expect(result).toEqual(updatedUser);
      expect(prismaService.users.update).toHaveBeenCalledWith({
        where: { user_id: mockUser.user_id },
        data: {
          username: updateUserDto.username,
          phone: updateUserDto.phone,
          full_name: updateUserDto.full_name,
          avatar_url: updateUserDto.avatar_url,
        },
      });
    });

    it('should update only provided fields', async () => {
      const updateUserDto = {
        phone: '0987654321',
      };

      const updatedUser = { ...mockUser, phone: updateUserDto.phone };
      jest.spyOn(prismaService.users, 'update').mockResolvedValue(updatedUser);

      const result = await service.update(mockUser.user_id, updateUserDto);

      expect(result).toEqual(updatedUser);
      expect(prismaService.users.update).toHaveBeenCalledWith({
        where: { user_id: mockUser.user_id },
        data: {
          phone: updateUserDto.phone,
        },
      });
    });
  });

  describe('changePassword', () => {
    it('should change password successfully', async () => {
      const oldPassword = 'oldpassword';
      const newPassword = 'newpassword';

      jest.spyOn(service, 'findById').mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (bcrypt.hash as jest.Mock).mockResolvedValue('newhashedpassword');
      jest.spyOn(prismaService.users, 'update').mockResolvedValue({
        ...mockUser,
        password_hash: 'newhashedpassword',
      });

      const result = await service.changePassword(
        mockUser.user_id,
        oldPassword,
        newPassword,
      );

      expect(result.password_hash).toBe('newhashedpassword');
      expect(bcrypt.compare).toHaveBeenCalledWith(
        oldPassword,
        mockUser.password_hash,
      );
      expect(bcrypt.hash).toHaveBeenCalledWith(newPassword, 10);
    });

    it('should throw error when old password matches new password', async () => {
      const password = 'samepassword';

      const result = await service.changePassword(
        mockUser.user_id,
        password,
        password,
      );

      expect(result.message).toBe('Mật khẩu mới phải khác mật khẩu cũ');
    });

    it('should throw error when old password is incorrect', async () => {
      const oldPassword = 'wrongoldpassword';
      const newPassword = 'newpassword';

      jest.spyOn(service, 'findById').mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.changePassword(mockUser.user_id, oldPassword, newPassword),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('forgotPassword', () => {
    it('should send reset email when user exists', async () => {
      jest.spyOn(service, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(jwtService, 'sign').mockReturnValue('reset-token');

      const result = await service.forgotPassword(mockUser.email);

      expect(result.message).toBe('Email xác thực đã được gửi');
      expect(jwtService.sign).toHaveBeenCalledWith(
        expect.objectContaining({
          user_id: mockUser.user_id,
          email: mockUser.email,
        }),
        expect.objectContaining({ expiresIn: '1h' }),
      );
    });

    it('should throw error when user does not exist', async () => {
      jest.spyOn(service, 'findByEmail').mockResolvedValue(null);

      await expect(service.forgotPassword('nonexistent@example.com')).rejects
        .toThrow(BadRequestException);
    });
  });

  describe('resetPassword', () => {
    it('should reset password successfully with valid token', async () => {
      const token = 'valid-reset-token';
      const newPassword = 'newpassword';
      const decoded = {
        user_id: mockUser.user_id,
        email: mockUser.email,
      };

      jest.spyOn(jwtService, 'verify').mockReturnValue(decoded);
      (bcrypt.hash as jest.Mock).mockResolvedValue('newhashedpassword');
      jest.spyOn(prismaService.users, 'update').mockResolvedValue({
        ...mockUser,
        password_hash: 'newhashedpassword',
      });

      const result = await service.resetPassword(token, newPassword);

      expect(result.password_hash).toBe('newhashedpassword');
      expect(jwtService.verify).toHaveBeenCalledWith(
        token,
        expect.objectContaining({ secret: expect.any(String) }),
      );
    });

    it('should throw error with invalid token', async () => {
      jest.spyOn(jwtService, 'verify').mockImplementation(() => {
        throw new Error('Invalid token');
      });

      await expect(
        service.resetPassword('invalid-token', 'newpassword'),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
