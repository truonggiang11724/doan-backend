import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminUsersService {
  constructor(private prisma: PrismaService) {}

  async findAll({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.prisma.users.findMany({
        where: {
          role: {
            in: ['CUSTOMER', 'SELLER'],
          },
        },
        skip,
        take: limit,
        include: {
          customers: true,
          sellers: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      }),
      this.prisma.users.count({
        where: {
          role: {
            in: ['CUSTOMER', 'SELLER'],
          },
        },
      }),
    ]);

    return {
      users: users.map((user) => ({
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status,
        created_at: user.created_at,
      })),
      total,
      page,
      limit,
    };
  }

  async updateStatus(id: number, status: string) {
    const user = await this.prisma.users.update({
      where: { user_id: id },
      data: { status: status as any },
    });

    return {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role,
      status: user.status,
      updated_at: user.updated_at,
    };
  }
}
