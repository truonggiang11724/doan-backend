import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminDashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [totalUsers, totalOrders, totalRevenue] = await Promise.all([
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
    ]);

    return {
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue._sum?.total_amount
        ? Number(totalRevenue._sum.total_amount)
        : 0,
    };
  }
}
