import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;
  let prismaService: PrismaService;

  const mockUser = {
    user_id: 1,
    username: 'testuser',
    email: 'test@example.com',
    password_hash: 'hashedpassword',
    role: 'CUSTOMER',
    status: 'active',
  };

  const mockToken = 'jwt.token.here';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByEmail: jest.fn(),
            create: jest.fn(),
            findById: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {
            customers: {
              create: jest.fn(),
            },
            carts: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const registerDto = {
        username: 'newuser',
        email: 'new@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpassword');
      jest.spyOn(usersService, 'create').mockResolvedValue(mockUser);
      jest.spyOn(jwtService, 'sign').mockReturnValue(mockToken);
      jest.spyOn(prismaService.customers, 'create').mockResolvedValue({} as any);
      jest.spyOn(prismaService.carts, 'create').mockResolvedValue({} as any);

      const result = await service.register(registerDto);

      expect(result).toEqual({
        access_token: mockToken,
        user: {
          user_id: mockUser.user_id,
          email: mockUser.email,
          username: mockUser.username,
          role: mockUser.role,
        },
      });

      expect(usersService.findByEmail).toHaveBeenCalledWith(registerDto.email);
      expect(bcrypt.hash).toHaveBeenCalledWith(registerDto.password, 10);
      expect(usersService.create).toHaveBeenCalled();
      expect(jwtService.sign).toHaveBeenCalled();
    });

    it('should throw error when email already exists', async () => {
      const registerDto = {
        username: 'newuser',
        email: 'test@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);

      await expect(service.register(registerDto)).rejects.toThrow(
        BadRequestException,
      );
      expect(usersService.findByEmail).toHaveBeenCalledWith(registerDto.email);
    });
  });

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const loginDto = {
        email: 'test@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      jest.spyOn(jwtService, 'sign').mockReturnValue(mockToken);

      const result = await service.login(loginDto);

      expect(result).toEqual({
        access_token: mockToken,
        user: {
          user_id: mockUser.user_id,
          email: mockUser.email,
          username: mockUser.username,
          role: mockUser.role,
        },
      });

      expect(usersService.findByEmail).toHaveBeenCalledWith(loginDto.email);
      expect(bcrypt.compare).toHaveBeenCalledWith(
        loginDto.password,
        mockUser.password_hash,
      );
      expect(jwtService.sign).toHaveBeenCalled();
    });

    it('should throw error when user not found', async () => {
      const loginDto = {
        email: 'nonexistent@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(usersService.findByEmail).toHaveBeenCalledWith(loginDto.email);
    });

    it('should throw error when password is incorrect', async () => {
      const loginDto = {
        email: 'test@example.com',
        password: 'wrongpassword',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(bcrypt.compare).toHaveBeenCalledWith(
        loginDto.password,
        mockUser.password_hash,
      );
    });
  });

  describe('validateUser', () => {
    it('should return user when validation is successful', async () => {
      const payload = { sub: 1 };

      jest.spyOn(usersService, 'findById').mockResolvedValue(mockUser);

      const result = await service.validateUser(payload);

      expect(result).toEqual(mockUser);
      expect(usersService.findById).toHaveBeenCalledWith(payload.sub);
    });

    it('should return null when user is not found', async () => {
      const payload = { sub: 999 };

      jest.spyOn(usersService, 'findById').mockResolvedValue(null);

      const result = await service.validateUser(payload);

      expect(result).toBeNull();
      expect(usersService.findById).toHaveBeenCalledWith(payload.sub);
    });
  });

  describe('generateToken (private method)', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
});
