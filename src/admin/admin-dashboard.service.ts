import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminDashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [totalUsers, totalOrders, totalRevenue, totalSellers, topSellers, revenueChart, visitorStats] = await Promise.all([
      this.prisma.users.count({
        where: { role: 'CUSTOMER' },
      }),
      this.prisma.orders.count(),
      this.prisma.orders.aggregate({
        _sum: {
          total_amount: true,
        },
        where: {
          order_status: 'completed',
        },
      }),
      this.prisma.users.count({
        where: { role: 'SELLER' },
      }),
      this.getTopSellersByRevenue(),
      this.getRevenueChartData(),
      this.getVisitorStats(),
    ]);

    return {
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue._sum?.total_amount
        ? Number(totalRevenue._sum.total_amount)
        : 0,
      totalSellers,
      topSellers,
      revenueChart,
      visitorStats,
    };
  }

  private async getTopSellersByRevenue() {
    const orders = await this.prisma.orders.findMany({
      where: {
        order_status: 'completed',
      },
      include: {
        order_items: {
          include: {
            product_variants: {
              include: {
                products: {
                  include: {
                    sellers: {
                      include: {
                        users: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    // Group orders by seller and calculate revenue
    const sellerRevenue: Record<number, { sellerId: number; revenue: number; sellerName: string }> = {};

    for (const order of orders) {
      for (const item of order.order_items) {
        const sellerId = item.product_variants?.products?.seller_id;
        const sellerName = item.product_variants?.products?.sellers?.users?.username;

        if (sellerId) {
          if (!sellerRevenue[sellerId]) {
            sellerRevenue[sellerId] = {
              sellerId,
              revenue: 0,
              sellerName: sellerName || 'Unknown',
            };
          }
          sellerRevenue[sellerId].revenue += Number(item.unit_price || 0) * Number(item.quantity || 0);
        }
      }
    }

    // Get top 3 sellers
    const topThree = Object.values(sellerRevenue)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 3)
      .map((seller) => ({
        seller_id: seller.sellerId,
        seller_name: seller.sellerName,
        revenue: Math.round(seller.revenue * 100) / 100,
      }));

    return topThree;
  }

  private async getRevenueChartData() {
    // Get revenue data for the last 12 months
    const now = new Date();
    const months: string[] = [];
    const revenueData: number[] = [];

    for (let i = 11; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);

      const revenue = await this.prisma.orders.aggregate({
        _sum: {
          total_amount: true,
        },
        where: {
          order_status: 'completed',
          created_at: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
        },
      });

      months.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
      revenueData.push(Number(revenue._sum?.total_amount || 0));
    }

    return {
      months,
      revenue: revenueData,
    };
  }

  private async getVisitorStats() {
    // For now, return mock data. In production, you'd have a visitor_logs table
    // This would track daily unique visitors via middleware
    const now = new Date();
    const days: string[] = [];
    const visitors: number[] = [];

    for (let i = 29; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(now.getDate() - i);
      days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
      // Mock data - in real implementation, query visitor_logs table
      visitors.push(Math.floor(Math.random() * 1000) + 500);
    }

    return {
      days,
      visitors,
    };
  }
}
