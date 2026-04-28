import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payments.create({
      data: createPaymentDto,
    });
  }

  async findAll() {
    return this.prisma.payments.findMany();
  }

  async findOne(paymentId: number) {
    return this.prisma.payments.findUnique({
      where: { payment_id: paymentId },
    });
  }

  async update(paymentId: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payments.update({
      where: { payment_id: paymentId },
      data: updatePaymentDto,
    });
  }

  async remove(paymentId: number) {
    return this.prisma.payments.delete({
      where: { payment_id: paymentId },
    });
  }

  async updatePaymentStatus(orderId: number, status: string, transactionCode?: string) {
    return this.prisma.payments.updateMany({
      where: { order_id: orderId },
      data: {
        status,
        transaction_code: transactionCode,
      },
    });
  }
}
