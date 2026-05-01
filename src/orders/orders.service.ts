import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { VNPayService } from '../payments/vnpay.service';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private vnpayService: VNPayService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { items, payment_method, ...data } = createOrderDto;

    const order = await this.prisma.orders.create({
      data: {
        ...data,
        order_items: items ? { create: items } : undefined,
      },
      include: { 
        order_items: {
          include: {
            mockup_renders: true,
          }
        } 
      },
    });

    if (payment_method === 'VNPAY') {
      const paymentUrl = this.vnpayService.buildPaymentUrl({
        vnp_Amount: Math.round(Number(order.total_amount || 0) * 100), // VNPay expects amount in smallest unit
        vnp_OrderInfo: `Thanh toan don hang ${order.order_id}`,
        vnp_OrderType: 'billpayment',
        vnp_TxnRef: order.order_id.toString(),
        vnp_IpAddr: '127.0.0.1', // Should get from request
      });

      // Create payment record
      await this.prisma.payments.create({
        data: {
          order_id: order.order_id,
          payment_method: 'VNPAY',
          provider: 'VNPay',
          amount: order.total_amount,
          status: 'PENDING',
        },
      });

      return { ...order, payment_url: paymentUrl };
    }

    return order;
  }

  async findAll(userId: number) {    
    return this.prisma.orders.findMany({
      where: {
        customer_id: userId
      },
      orderBy: { created_at : "desc" },
      include: { 
        order_items: {
          include: {
            mockup_renders: true,
          }
        } 
      },
    });
  }

  async findOne(orderId: number) {
    return this.prisma.orders.findUnique({
      where: { order_id: orderId },
      include: { 
        order_items: {
          include: {
            product_variants: {
              include: { products: true }
            },
            mockup_renders: true,
            reviews: {
              include: {
                review_media: true,
              },
            },
          }
        },  
      },
    });
  }

  async update(orderId: number, updateOrderDto: UpdateOrderDto) {
    const { items, ...data } = updateOrderDto;

    return this.prisma.$transaction(async (prisma) => {
      if (items) {
        await prisma.order_items.deleteMany({ where: { order_id: orderId } });
      }

      return prisma.orders.update({
        where: { order_id: orderId },
        data: {
          ...data,
          order_items: items ? { create: items } : undefined,
        },
        include: { 
          order_items: {
            include: {
              mockup_renders: true,
            }
          } 
        },
      });
    });
  }

  async remove(orderId: number) {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.order_items.deleteMany({ where: { order_id: orderId } });
      await prisma.payments.deleteMany({ where: { order_id: orderId } });
      await prisma.refunds.deleteMany({ where: { order_id: orderId } });
      await prisma.shipments.deleteMany({ where: { order_id: orderId } });
      await prisma.promotion_usages.deleteMany({
        where: { order_id: orderId },
      });
      await prisma.wallet_transactions.deleteMany({
        where: { order_id: orderId },
      });
      await prisma.cancel_requests.deleteMany({ where: { order_id: orderId } });
      return prisma.orders.delete({ where: { order_id: orderId } });
    });
  }

  async findBySellerId(sellerId: number) {
    return this.prisma.orders.findMany({
      include: {
        order_items: {
          include: {
            product_variants: {
              include: {
                products: true,
              },
            },
            mockup_renders: true,
          },
          where: {
            product_variants: {
              products: {
                seller_id: sellerId,
              },
            },
          },
        },
        customers: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async receive(orderId: number) {
    const order = await this.prisma.orders.findUnique({
      where: { order_id: orderId },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    if (order.order_status !== 'DELIVERED') {
      throw new Error('Order must be in Delivered status to receive');
    }

    return this.prisma.orders.update({
      where: { order_id: orderId },
      data: { order_status: 'COMPLETED' },
    });
  }
}
