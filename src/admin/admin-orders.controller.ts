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
import { AdminOrdersService } from './admin-orders.service';
import { AdminGuard } from './admin.guard';

class UpdateOrderStatusDto {
  status!: string;
}

@ApiTags('Admin Orders')
@Controller('admin/orders')
@UseGuards(AdminGuard)
export class AdminOrdersController {
  constructor(private readonly adminOrdersService: AdminOrdersService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all orders',
    description: 'Retrieve list of all orders with optional filtering by status.',
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
  @ApiQuery({
    name: 'status',
    type: String,
    required: false,
    description: 'Filter by order status (pending, processing, shipped, delivered, cancelled)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of orders retrieved successfully',
    example: {
      data: [
        {
          order_id: 100,
          order_number: 'ORD-2024-00100',
          customer_id: 1,
          customer_name: 'John Doe',
          status: 'delivered',
          total_amount: 234.97,
          items_count: 2,
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 450,
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
    @Query('status') status?: string,
  ) {
    return this.adminOrdersService.findAll({ page, limit, status });
  }

  @Get(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get order details',
    description: 'Retrieve complete details about a specific order.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Order ID',
    example: 100,
  })
  @ApiResponse({
    status: 200,
    description: 'Order details retrieved successfully',
    example: {
      order_id: 100,
      order_number: 'ORD-2024-00100',
      customer_id: 1,
      customer_name: 'John Doe',
      customer_email: 'john@example.com',
      status: 'delivered',
      items: [
        {
          order_item_id: 1,
          product_id: 5,
          product_name: 'Classic T-Shirt',
          quantity: 2,
          unit_price: 99.99,
        },
      ],
      shipping_address: {
        street: '123 Main St',
        city: 'City',
        country: 'Vietnam',
      },
      subtotal: 199.98,
      shipping: 15.00,
      tax: 19.99,
      total_amount: 234.97,
      payment_status: 'completed',
      created_at: '2024-01-15T10:30:00Z',
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
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminOrdersService.findOne(id);
  }

  @Put(':id/status')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update order status',
    description: 'Change order status (pending, processing, shipped, delivered, cancelled).',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Order ID',
    example: 100,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
          description: 'New order status',
        },
      },
      required: ['status'],
    },
    examples: {
      example1: {
        value: {
          status: 'shipped',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Order status updated successfully',
    example: {
      order_id: 100,
      status: 'shipped',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid status transition',
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
    description: 'Order not found',
  })
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.adminOrdersService.updateStatus(
      id,
      updateOrderStatusDto.status,
    );
  }
}
