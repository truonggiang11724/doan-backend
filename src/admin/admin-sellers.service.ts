import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminSellersService {
  constructor(private prisma: PrismaService) {}

  async findAll({ page = 1, limit = 10 }) {
    const skip = (page - 1) * limit;

    const [sellers, total] = await Promise.all([
      this.prisma.sellers.findMany({
        skip,
        take: limit,
        include: {
          users: {
            select: {
              email: true,
              phone: true,
              full_name: true,
              status: true,
              created_at: true,
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      }),
      this.prisma.sellers.count(),
    ]);

    const formattedSellers = sellers.map((seller) => ({
      seller_id: seller.user_id,
      seller_name: seller.users.full_name || seller.shop_name,
      email: seller.users.email,
      phone_number: seller.users.phone,
      status: seller.users.status || 'pending',
      created_at: seller.users.created_at,
    }));

    return {
      sellers: formattedSellers,
      total,
      page,
      limit,
    };
  }

  async updateStatus(id: number, status: string) {
    const seller = await this.prisma.sellers.findUnique({
      where: { user_id: id },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    // Update user status instead of seller status
    await this.prisma.users.update({
      where: { user_id: id },
      data: { status: status as any },
    });

    const updatedSeller = await this.prisma.sellers.findUnique({
      where: { user_id: id },
      include: {
        users: {
          select: {
            email: true,
            phone: true,
            full_name: true,
            status: true,
            created_at: true,
          },
        },
      },
    });

    return {
      seller_id: updatedSeller!.user_id,
      seller_name: updatedSeller!.users.full_name || updatedSeller!.shop_name,
      email: updatedSeller!.users.email,
      phone_number: updatedSeller!.users.phone,
      status: updatedSeller!.users.status,
      created_at: updatedSeller!.created_at,
    };
  }
}