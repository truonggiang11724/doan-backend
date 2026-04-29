import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { changePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';


@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get current user profile',
    description: 'Retrieve the profile information of the authenticated user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the currently authenticated user profile',
    example: {
      user_id: 1,
      username: 'johndoe',
      email: 'user@example.com',
      full_name: 'John Doe',
      phone: '0123456789',
      avatar_url: '/uploads/avatar.jpg',
      role: 'CUSTOMER',
      status: 'active',
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async getCurrentUser(@Request() req) {
    const user = await this.userService.findById(req.user.user_id);
    return user;
  }

  @Put('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update user profile',
    description: 'Update the profile information of the authenticated user.',
  })
  @ApiBody({
    type: UpdateUserDto,
    description: 'User profile update data',
    examples: {
      example1: {
        value: {
          username: 'janedoe',
          full_name: 'Jane Doe',
          phone: '0987654321',
          avatar_url: '/uploads/new-avatar.jpg',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Profile updated successfully',
    example: {
      user_id: 1,
      username: 'janedoe',
      email: 'user@example.com',
      full_name: 'Jane Doe',
      phone: '0987654321',
      avatar_url: '/uploads/new-avatar.jpg',
      role: 'CUSTOMER',
      status: 'active',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid input data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    return this.userService.update(req.user.user_id, updateUserDto);
  }

  @Put('changePassword')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Change user password',
    description: 'Update the password for the authenticated user. Requires the old password for verification.',
  })
  @ApiBody({
    type: changePasswordDto,
    description: 'Password change data',
    examples: {
      example1: {
        value: {
          oldPassword: 'CurrentPassword123!',
          newPassword: 'NewPassword123!',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Password changed successfully',
    example: {
      message: 'Password changed successfully',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid old password or weak new password',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async changePassword(
    @Body() changePasswordDto: changePasswordDto,
    @Request() req,
  ) {
    return this.userService.changePassword(
      req.user.user_id,
      changePasswordDto.oldPassword,
      changePasswordDto.newPassword,
    );
  }

  @Post('forgotPassword')
  @ApiOperation({
    summary: 'Request password reset',
    description: 'Send a password reset email to the registered email address.',
  })
  @ApiBody({
    type: ForgotPasswordDto,
    description: 'Email address for password reset',
    examples: {
      example1: {
        value: {
          email: 'user@example.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset email sent successfully',
    example: {
      message: 'Password reset email sent successfully. Please check your email.',
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Email address not found in system',
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to send email',
  })
  async forgotPassword(
    @Body() forgotPasswordDto: ForgotPasswordDto,
  ) {
    return this.userService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('resetPassword')
  @ApiOperation({
    summary: 'Reset password with token',
    description: 'Complete the password reset process using the token sent via email.',
  })
  @ApiBody({
    type: ResetPasswordDto,
    description: 'Password reset token and new password',
    examples: {
      example1: {
        value: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          newPassword: 'NewPassword123!',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset successfully',
    example: {
      message: 'Password reset successfully',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid token or weak password',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - token expired or invalid',
  })
  async resetPassword(
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    return this.userService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }
}
