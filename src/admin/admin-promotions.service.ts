import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminPromotionsService {
  constructor(private prisma: PrismaService) {}

  async findAll({ page = 1, limit = 10 }) {
    const skip = (page - 1) * limit;

    const [promotions, total] = await Promise.all([
      this.prisma.promotions.findMany({
        skip,
        take: limit,
        orderBy: {
          promotion_id: 'desc',
        },
      }),
      this.prisma.promotions.count(),
    ]);

    return {
      promotions,
      total,
      page,
      limit,
    };
  }

  async create(data: any) {
    const promotion = await this.prisma.promotions.create({
      data: {
        promotion_type: data.promotion_type,
        discount_value: data.discount_value,
        min_order_value: data.min_order_value,
        start_date: data.start_date ? new Date(data.start_date) : null,
        end_date: data.end_date ? new Date(data.end_date) : null,
        status: data.status,
      },
    });

    return promotion;
  }

  async update(id: number, data: any) {
    const promotion = await this.prisma.promotions.findUnique({
      where: { promotion_id: id },
    });

    if (!promotion) {
      throw new NotFoundException('Promotion not found');
    }

    const updatedPromotion = await this.prisma.promotions.update({
      where: { promotion_id: id },
      data: {
        promotion_type: data.promotion_type,
        discount_value: data.discount_value,
        min_order_value: data.min_order_value,
        start_date: data.start_date ? new Date(data.start_date) : null,
        end_date: data.end_date ? new Date(data.end_date) : null,
        status: data.status,
      },
    });

    return updatedPromotion;
  }

  async delete(id: number) {
    const promotion = await this.prisma.promotions.findUnique({
      where: { promotion_id: id },
    });

    if (!promotion) {
      throw new NotFoundException('Promotion not found');
    }

    await this.prisma.promotions.delete({
      where: { promotion_id: id },
    });

    return { message: 'Promotion deleted successfully' };
  }
}