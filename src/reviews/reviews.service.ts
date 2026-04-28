import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    const { media, ...data } = createReviewDto;

    return this.prisma.reviews.create({
      data: {
        ...data,
        review_media: media ? { create: media } : undefined,
      },
      include: { review_media: true },
    });
  }

  async findAll() {
    return this.prisma.reviews.findMany({
      include: { review_media: true },
    });
  }

  async findOne(reviewId: number) {
    return this.prisma.reviews.findUnique({
      where: { review_id: reviewId },
      include: { review_media: true },
    });
  }

  async update(reviewId: number, updateReviewDto: UpdateReviewDto) {
    const { media, ...data } = updateReviewDto;

    return this.prisma.$transaction(async (prisma) => {
      if (media) {
        await prisma.review_media.deleteMany({
          where: { review_id: reviewId },
        });
      }

      return prisma.reviews.update({
        where: { review_id: reviewId },
        data: {
          ...data,
          review_media: media ? { create: media } : undefined,
        },
        include: { review_media: true },
      });
    });
  }

  async remove(reviewId: number) {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.review_media.deleteMany({ where: { review_id: reviewId } });
      return prisma.reviews.delete({ where: { review_id: reviewId } });
    });
  }

  async findByProductIds(productIds: number[]) {
    return this.prisma.reviews.findMany({
      where: { product_id: { in: productIds } },
      include: { 
        review_media: true,
        customers: true,
        order_items: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }
}
