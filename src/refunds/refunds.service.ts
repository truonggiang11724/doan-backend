import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';

@Injectable()
export class RefundsService {
  constructor(private prisma: PrismaService) {}

  async create(createRefundDto: CreateRefundDto) {
    return this.prisma.refunds.create({
      data: {...createRefundDto, status: 'pending'},
    });
  }

  async findAll() {
    return this.prisma.refunds.findMany({
      include: {
        orders: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.refunds.findUnique({
      where: { id },
      include: {
        orders: true,
      },
    });
  }

  async update(id: number, updateRefundDto: UpdateRefundDto) {
    return this.prisma.refunds.update({
      where: { id },
      data: updateRefundDto,
    });
  }

  async remove(id: number) {
    return this.prisma.refunds.delete({
      where: { id },
    });
  }
}