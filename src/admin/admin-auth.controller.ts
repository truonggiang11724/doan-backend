import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import { AdminGuard } from './admin.guard';
import { log } from 'console';
import { LoginDto } from '../auth/dto/login.dto';

@ApiTags('Admin Auth')
@Controller('admin')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Admin login',
    description: 'Authenticate admin user with email and password. Returns JWT token for admin operations.',
  })
  @ApiBody({
    type: LoginDto,
    description: 'Admin login credentials',
    examples: {
      example1: {
        value: {
          email: 'admin@teezone.com',
          password: 'AdminPassword123!',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Admin logged in successfully',
    example: {
      user: {
        user_id: 1,
        email: 'admin@teezone.com',
        full_name: 'Admin User',
        role: 'admin',
      },
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid credentials or not an admin',
  })
  @ApiResponse({
    status: 404,
    description: 'Admin user not found',
  })
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;    
    return this.adminAuthService.login(email, password);
  }

  @Get('me')
  @UseGuards(AdminGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get admin profile',
    description: 'Retrieve the profile information of the authenticated admin user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Admin profile retrieved successfully',
    example: {
      user_id: 1,
      email: 'admin@teezone.com',
      full_name: 'Admin User',
      role: 'admin',
      permissions: ['manage_products', 'manage_orders', 'manage_users', 'manage_sellers'],
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - not an admin user',
  })
  async getProfile(@Request() req: any) {
    return this.adminAuthService.getProfile(req.user.user_id);
  }
}
