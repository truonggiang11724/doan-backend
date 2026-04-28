import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const { product_variants, product_media, ...data } = createProductDto;

    return this.prisma.products.create({
      data: {
        ...data,
        product_variants: product_variants ? { create: product_variants } : undefined,
        product_media: product_media ? { create: product_media } : undefined,
      },
      include: {
        product_variants: true,
        product_media: true,
      },
    });
  }

  async findAll() {
    return this.prisma.products.findMany({
      include: {
        product_variants: true,
        product_media: true,
        reviews: true,
      },
    });
  }

  async findOne(productId: number) {
    return this.prisma.products.findUnique({
      where: { product_id: productId },
      include: {
        product_variants: true,
        product_media: true,
        reviews: true,
        categories: true,
      },
    });
  }

  async update(productId: number, updateProductDto: UpdateProductDto) {
    const { product_variants, product_media, ...data } = updateProductDto;

    return this.prisma.$transaction(async (prisma) => {
      if (product_variants) {
        await prisma.product_variants.deleteMany({
          where: { product_id: productId },
        });
      }
      if (product_media?.length) {
        await prisma.product_media.deleteMany({
          where: { product_id: productId },
        });
      }      

      return prisma.products.update({
        where: { product_id: productId },
        data: {
          ...data,
          product_variants: product_variants ? { create: product_variants } : undefined,
          product_media: product_media ? { create: product_media } : undefined,
        },
        include: {
          product_variants: true,
          product_media: true,
        },
      });
    });
  }

  async remove(productId: number) {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.product_media.deleteMany({
        where: { product_id: productId },
      });
      await prisma.product_variants.deleteMany({
        where: { product_id: productId },
      });
      return prisma.products.delete({ where: { product_id: productId } });
    });
  }

  async findBySellerId(sellerId: number) {
    return this.prisma.products.findMany({
      where: { seller_id: sellerId },
      include: {
        product_variants: true,
        product_media: true,
        reviews: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }
}
