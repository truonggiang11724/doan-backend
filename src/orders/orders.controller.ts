import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  @ApiOperation({
    summary: 'Create a new order',
    description: 'Place a new order with items from cart. Calculates total amount, shipping, and taxes.',
  })
  @ApiBody({
    type: CreateOrderDto,
    description: 'Order details with items',
    examples: {
      example1: {
        value: {
          customer_id: 1,
          address_id: 1,
          total_amount: 234.97,
          order_status: 'PENDING',
          items: [
            {
              variant_id: 5,
              quantity: 2,
              unit_price: 99.99,
              render_id: 10,
            },
          ],
          payment_method: 'COD',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
    example: {
      order_id: 100,
      order_number: 'ORD-2024-00100',
      customer_id: 1,
      address_id: 1,
      order_status: 'PENDING',
      payment_status: 'UNPAID',
      total_amount: 234.97,
      created_at: '2024-01-15T10:30:00Z',
      order_items: [
        {
          order_item_id: 1,
          variant_id: 5,
          quantity: 2,
          unit_price: 99.99,
          render_id: 10,
        },
      ],
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid order data',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get user orders',
    description: 'Retrieve all orders for the authenticated user with status information.',
  })
  @ApiQuery({
    name: 'status',
    type: String,
    required: false,
    description: 'Filter by order status (pending, processing, shipped, delivered, cancelled)',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of user orders retrieved successfully',
    example: {
      data: [
        {
          order_id: 100,
          order_number: 'ORD-2024-00100',
          order_status: 'DELIVERED',
          payment_status: 'PAID',
          total_amount: 234.97,
          created_at: '2024-01-15T10:30:00Z',
          items_count: 2,
        },
      ],
      total: 10,
      page: 1,
      limit: 10,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  findAll(
    @Request() req: any,
    @Query('status') status?: string,
    @Query('page') page?: number,
  ) {
    return this.ordersService.findAll(req.user.user_id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get order details',
    description: 'Retrieve detailed information about a specific order including items and payment.',
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
      address_id: 1,
      order_status: 'DELIVERED',
      payment_status: 'PAID',
      total_amount: 234.97,
      created_at: '2024-01-15T10:30:00Z',
      order_items: [
        {
          order_item_id: 1,
          variant_id: 5,
          quantity: 2,
          unit_price: 99.99,
          render_id: 10,
          product_name: 'Classic T-Shirt',
          variant_details: {
            color: 'Black',
            size: 'M',
          },
        },
      ],
      shipping_address: {
        receiver_name: 'John Doe',
        phone: '0123456789',
        address_detail: '123 Main St, District 1',
        ward_name: 'Ward 1',
        district_name: 'District 1',
        province_name: 'Ho Chi Minh City',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update order status',
    description: 'Update order status (e.g., from pending to processing or cancelled).',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Order ID',
    example: 100,
  })
  @ApiBody({
    type: UpdateOrderDto,
    description: 'Order update data',
    examples: {
      example1: {
        value: {
          order_status: 'PROCESSING',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Order updated successfully',
    example: {
      order_id: 100,
      order_status: 'PROCESSING',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid status transition',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Cancel order',
    description: 'Cancel an order. Only pending and processing orders can be cancelled.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Order ID',
    example: 100,
  })
  @ApiResponse({
    status: 200,
    description: 'Order cancelled successfully',
    example: {
      message: 'Order cancelled successfully',
      order_id: 100,
      refund_amount: 234.97,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - order cannot be cancelled',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.remove(id);
  }

  @Put(':id/receive')
  @ApiOperation({
    summary: 'Mark order as received',
    description: 'Update order status to Received when customer confirms delivery.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Order ID',
    example: 100,
  })
  @ApiResponse({
    status: 200,
    description: 'Order marked as received',
    example: {
      order_id: 100,
      order_status: 'Received',
      updated_at: '2024-01-15T12:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - order not in Delivered status',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  receive(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.receive(id);
  }
}
