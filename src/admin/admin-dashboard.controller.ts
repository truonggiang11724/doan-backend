import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AdminDashboardService } from './admin-dashboard.service';
import { AdminGuard } from './admin.guard';

@ApiTags('Admin Dashboard')
@Controller('admin/dashboard')
// @UseGuards(AdminGuard)
export class AdminDashboardController {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Get('stats')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get dashboard statistics',
    description: 'Retrieve comprehensive dashboard statistics including sales, orders, users, and inventory data.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dashboard statistics retrieved successfully',
    example: {
      totalSales: 1500000,
      totalOrders: 450,
      totalUsers: 2500,
      totalSellers: 85,
      activeProducts: 1200,
      lowStockProducts: 45,
      revenueThisMonth: 350000,
      ordersThisMonth: 120,
      newCustomersThisMonth: 250,
      totalReviews: 3200,
      averageRating: 4.5,
      pendingOrders: 25,
      processingOrders: 45,
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
  async getStats() {
    return this.adminDashboardService.getStats();
  }
}
