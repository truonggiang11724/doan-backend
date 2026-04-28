import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.categories.findMany({
      include: { products: { include: { product_media: true } } },
    });
  }

  async findOne(categoryId: number) {
    return this.prisma.categories.findUnique({
      where: { category_id: categoryId },
      include: { products: { include: { product_media: true, product_variants: true, } } },
    });
  }

  async update(categoryId: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categories.update({
      where: { category_id: categoryId },
      data: updateCategoryDto,
    });
  }

  async remove(categoryId: number) {
    return this.prisma.categories.delete({
      where: { category_id: categoryId },
    });
  }
}
