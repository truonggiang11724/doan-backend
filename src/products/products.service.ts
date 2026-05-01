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
        reviews: {
          include: {
            review_media: true,
            customers: true,
          },
          orderBy: { created_at: 'desc' },
        },
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

  async findTopSelling(limit = 5) {
    const orderItems = await this.prisma.order_items.findMany({
      where: { quantity: { not: null } },
      include: {
        product_variants: {
          include: {
            products: {
              include: {
                product_media: true,
                product_variants: true,
                reviews: true,
              },
            },
          },
        },
      },
    });

    const salesMap = new Map<number, { product: any; soldQuantity: number }>();

    orderItems.forEach((item) => {
      const product = item.product_variants?.products;
      if (!product) return;
      const productId = product.product_id;
      const quantity = item.quantity || 0;
      const existing = salesMap.get(productId);

      if (existing) {
        existing.soldQuantity += quantity;
      } else {
        salesMap.set(productId, {
          product,
          soldQuantity: quantity,
        });
      }
    });

    return Array.from(salesMap.values())
      .sort((a, b) => b.soldQuantity - a.soldQuantity)
      .slice(0, limit)
      .map(({ product, soldQuantity }) => ({ ...product, soldQuantity }));
  }

  async findSimilarProducts(productId: number, limit = 6) {
    const product = await this.prisma.products.findUnique({
      where: { product_id: productId },
      include: { product_variants: true },
    });

    if (!product) return [];

    const categoryId = product.category_id;

    // Tìm sản phẩm cùng category trước
    const similarProducts = await this.prisma.products.findMany({
      where: {
        product_id: { not: productId },
        category_id: categoryId,
      },
      include: {
        product_variants: true,
        product_media: true,
        reviews: true,
      },
      take: limit,
    });

    // Nếu không đủ sản phẩm cùng category, tìm thêm sản phẩm khác
    if (similarProducts.length < limit) {
      const additionalProducts = await this.prisma.products.findMany({
        where: {
          product_id: { not: productId },
          category_id: { not: categoryId },
        },
        include: {
          product_variants: true,
          product_media: true,
          reviews: true,
        },
        take: limit - similarProducts.length,
      });

      similarProducts.push(...additionalProducts);
    }

    return similarProducts.slice(0, limit);
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
