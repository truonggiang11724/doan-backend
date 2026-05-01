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
import { AdminSellersService } from './admin-sellers.service';
import { AdminGuard } from './admin.guard';

class UpdateSellerStatusDto {
  status!: string;
}

@ApiTags('Admin Sellers')
@Controller('admin/sellers')
export class AdminSellersController {
  constructor(private readonly adminSellersService: AdminSellersService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all sellers',
    description: 'Retrieve list of all sellers with pagination.',
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
    description: 'List of sellers retrieved successfully',
    example: {
      sellers: [
        {
          seller_id: 1,
          seller_name: 'Seller Name',
          email: 'seller@example.com',
          phone_number: '0123456789',
          status: 'active',
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
    return this.adminSellersService.findAll({ page, limit });
  }

  @Put(':id/status')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update seller status',
    description: 'Change seller account status (active, inactive, pending, etc).',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Seller ID',
    example: 1,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'active',
          description: 'New status for the seller',
        },
      },
      required: ['status'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Seller status updated successfully',
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
    description: 'Seller not found',
  })
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSellerStatusDto: UpdateSellerStatusDto,
  ) {
    return this.adminSellersService.updateStatus(id, updateSellerStatusDto.status);
  }
}