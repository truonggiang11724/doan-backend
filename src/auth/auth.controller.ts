import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from '../users/users.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new user account',
    description: 'Create a new user account with email and password. Returns user info and JWT token.',
  })
  @ApiBody({
    type: RegisterDto,
    description: 'User registration details',
    examples: {
      example1: {
        value: {
          username: 'johndoe',
          email: 'user@example.com',
          password: 'SecurePassword123!',
          full_name: 'John Doe',
          phone: '0123456789',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully',
    example: {
      user: {
        user_id: 1,
        username: 'johndoe',
        email: 'user@example.com',
        full_name: 'John Doe',
        phone: '0123456789',
        role: 'CUSTOMER',
        status: 'active',
        created_at: '2024-01-15T10:30:00Z',
      },
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid input or email already exists',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'User login',
    description: 'Authenticate user with email and password. Returns JWT token for authenticated requests.',
  })
  @ApiBody({
    type: LoginDto,
    description: 'User login credentials',
    examples: {
      example1: {
        value: {
          email: 'user@example.com',
          password: 'SecurePassword123!',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User authenticated successfully',
    example: {
      user: {
        user_id: 1,
        username: 'johndoe',
        email: 'user@example.com',
        full_name: 'John Doe',
        phone: '0123456789',
        role: 'CUSTOMER',
        status: 'active',
      },
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid email or password',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

}
