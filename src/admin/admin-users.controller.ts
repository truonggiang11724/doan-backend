import {
  Controller,
  Get,
  Put,
  Param,
  Query,
  ParseIntPipe,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AdminUsersService } from './admin-users.service';
import { AdminGuard } from './admin.guard';

class UpdateUserStatusDto {
  status!: string;
}

@ApiTags('Admin Users')
@Controller('admin/users')
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve list of all users with pagination.',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number (default: 1)',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Items per page (default: 10)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully',
    example: {
      data: [
        {
          user_id: 1,
          email: 'user@example.com',
          full_name: 'John Doe',
          phone_number: '0123456789',
          status: 'active',
          role: 'customer',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 100,
      page: 1,
      limit: 10,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - not an admin',
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.adminUsersService.findAll({ page, limit });
  }

  @Put(':id/status')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update user status',
    description: 'Change user account status (active, inactive, suspended, etc).',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'User ID',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['active', 'inactive', 'suspended'],
          description: 'New user status',
        },
      },
      required: ['status'],
    },
    examples: {
      example1: {
        value: {
          status: 'suspended',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'User status updated successfully',
    example: {
      user_id: 1,
      status: 'suspended',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid status',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - not an admin',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserStatusDto: UpdateUserStatusDto,
  ) {
    return this.adminUsersService.updateStatus(id, updateUserStatusDto.status);
  }
}
