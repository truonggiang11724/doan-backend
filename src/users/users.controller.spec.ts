import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  const mockUser = {
    user_id: 1,
    username: 'testuser',
    email: 'test@example.com',
    phone: '1234567890',
    full_name: 'Test User',
    avatar_url: 'http://example.com/avatar.jpg',
    role: 'CUSTOMER',
    status: 'active',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findById: jest.fn(),
            update: jest.fn(),
            changePassword: jest.fn(),
            forgotPassword: jest.fn(),
            resetPassword: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCurrentUser', () => {
    it('should return current authenticated user', async () => {
      const req = { user: { user_id: 1 } };

      jest.spyOn(usersService, 'findById').mockResolvedValue(mockUser);

      const result = await controller.getCurrentUser(req);

      expect(result).toEqual(mockUser);
      expect(usersService.findById).toHaveBeenCalledWith(req.user.user_id);
    });
  });

  describe('update', () => {
    it('should update user profile', async () => {
      const req = { user: { user_id: 1 } };
      const updateUserDto = {
        phone: '0987654321',
        username: 'updateduser',
        full_name: 'Updated Name',
        avatar_url: 'http://example.com/new-avatar.jpg',
      };

      const updatedUser = { ...mockUser, ...updateUserDto };
      jest.spyOn(usersService, 'update').mockResolvedValue(updatedUser);

      const result = await controller.update(updateUserDto, req);

      expect(result).toEqual(updatedUser);
      expect(usersService.update).toHaveBeenCalledWith(
        req.user.user_id,
        updateUserDto,
      );
    });
  });

  describe('changePassword', () => {
    it('should change user password', async () => {
      const req = { user: { user_id: 1 } };
      const changePasswordDto = {
        oldPassword: 'oldpassword',
        newPassword: 'newpassword',
      };

      const updatedUser = { ...mockUser };
      jest.spyOn(usersService, 'changePassword').mockResolvedValue(updatedUser);

      const result = await controller.changePassword(changePasswordDto, req);

      expect(result).toEqual(updatedUser);
      expect(usersService.changePassword).toHaveBeenCalledWith(
        req.user.user_id,
        changePasswordDto.oldPassword,
        changePasswordDto.newPassword,
      );
    });
  });

  describe('forgotPassword', () => {
    it('should send password reset email', async () => {
      const forgotPasswordDto = { email: mockUser.email };

      const expectedResult = { message: 'Email xác thực đã được gửi' };
      jest
        .spyOn(usersService, 'forgotPassword')
        .mockResolvedValue(expectedResult);

      const result = await controller.forgotPassword(forgotPasswordDto);

      expect(result).toEqual(expectedResult);
      expect(usersService.forgotPassword).toHaveBeenCalledWith(
        forgotPasswordDto.email,
      );
    });
  });

  describe('resetPassword', () => {
    it('should reset password with valid token', async () => {
      const resetPasswordDto = {
        token: 'valid-reset-token',
        newPassword: 'newpassword',
      };

      const updatedUser = { ...mockUser };
      jest.spyOn(usersService, 'resetPassword').mockResolvedValue(updatedUser);

      const result = await controller.resetPassword(resetPasswordDto);

      expect(result).toEqual(updatedUser);
      expect(usersService.resetPassword).toHaveBeenCalledWith(
        resetPasswordDto.token,
        resetPasswordDto.newPassword,
      );
    });
  });
});
