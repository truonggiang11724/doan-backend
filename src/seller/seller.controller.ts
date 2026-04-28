import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SellerService } from './seller.service';

@ApiTags('Seller')
@Controller('seller')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get('dashboard')
  @ApiOperation({
    summary: 'Get seller dashboard',
    description: 'Retrieve dashboard statistics for the authenticated seller including sales, orders, and inventory.',
  })
  @ApiResponse({
    status: 200,
    description: 'Seller dashboard stats retrieved successfully',
    example: {
      totalSales: 500000,
      totalOrders: 150,
      totalProducts: 50,
      averageRating: 4.7,
      totalReviews: 200,
      lowStockProducts: 5,
      revenue_this_month: 100000,
      orders_this_month: 35,
      new_reviews_this_month: 45,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getDashboard(@Request() req) {
    return this.sellerService.getDashboardStats(req.user.user_id);
  }

  @Get('products')
  @ApiOperation({
    summary: 'Get seller products',
    description: 'Retrieve list of all products published by the seller.',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Items per page',
  })
  @ApiResponse({
    status: 200,
    description: 'List of seller products retrieved successfully',
    example: {
      data: [
        {
          product_id: 1,
          name: 'Classic T-Shirt',
          price: 99.99,
          stock: 50,
          rating: 4.5,
          review_count: 25,
          status: 'active',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 50,
      page: 1,
      limit: 10,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getProducts(@Request() req, @Query('page') page?: number, @Query('limit') limit?: number) {
    return this.sellerService.getSellerProducts(req.user.user_id);
  }

  @Get('orders')
  @ApiOperation({
    summary: 'Get seller orders',
    description: 'Retrieve list of all orders containing products from the seller.',
  })
  @ApiQuery({
    name: 'status',
    type: String,
    required: false,
    description: 'Filter by order status',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of seller orders retrieved successfully',
    example: {
      data: [
        {
          order_id: 100,
          order_number: 'ORD-2024-00100',
          customer_name: 'John Doe',
          total_amount: 234.97,
          status: 'processing',
          seller_revenue: 189.97,
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 150,
      total_revenue: 500000,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getOrders(@Request() req, @Query('status') status?: string, @Query('page') page?: number) {
    return this.sellerService.getSellerOrders(req.user.user_id);
  }

  @Get('reviews')
  @ApiOperation({
    summary: 'Get seller reviews',
    description: 'Retrieve all reviews for products sold by the seller.',
  })
  @ApiQuery({
    name: 'rating',
    type: Number,
    required: false,
    description: 'Filter by minimum rating (1-5)',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'List of seller reviews retrieved successfully',
    example: {
      data: [
        {
          review_id: 50,
          product_name: 'Classic T-Shirt',
          customer_name: 'John Doe',
          rating: 5,
          title: 'Excellent Product',
          comment: 'Great quality and fast shipping!',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 200,
      average_rating: 4.7,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getReviews(@Request() req, @Query('rating') rating?: number, @Query('page') page?: number) {
    return this.sellerService.getSellerReviews(req.user.user_id);
  }

  @Get('wallet')
  @ApiOperation({
    summary: 'Get seller wallet',
    description: 'Retrieve wallet balance and transaction history for the seller.',
  })
  @ApiResponse({
    status: 200,
    description: 'Seller wallet information retrieved successfully',
    example: {
      wallet_id: 1,
      balance: 150000,
      total_earnings: 500000,
      total_withdrawals: 350000,
      pending_balance: 50000,
      last_updated: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getWallet(@Request() req) {
    return this.sellerService.getSellerWallet(req.user.user_id);
  }

  @Get('analytics')
  @ApiOperation({
    summary: 'Get seller analytics',
    description: 'Retrieve comprehensive analytics data for seller performance including sales trends and customer insights.',
  })
  @ApiQuery({
    name: 'period',
    type: String,
    required: false,
    description: 'Analytics period (today, week, month, year)',
  })
  @ApiResponse({
    status: 200,
    description: 'Seller analytics data retrieved successfully',
    example: {
      period: 'month',
      total_views: 15000,
      total_clicks: 5000,
      conversion_rate: 3,
      average_order_value: 150,
      repeat_customer_rate: 35,
      top_products: [
        {
          product_id: 1,
          name: 'Classic T-Shirt',
          sales: 50,
          revenue: 5000,
        },
      ],
      sales_by_day: [
        {
          date: '2024-01-15',
          sales: 10,
          revenue: 1500,
        },
      ],
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getAnalytics(@Request() req, @Query('period') period?: string) {
    return this.sellerService.getSellerAnalytics(req.user.user_id);
  }
}
