import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { VNPayService } from '../payments/vnpay.service';

@Injectable()
export class OrdersService {
  // Order limits
  private readonly MAX_ORDER_AMOUNT = 2000000; // Max amount per order
  private readonly DEFAULT_DAILY_LIMIT = 5000000; // Default daily limit
  private readonly PREMIUM_DAILY_LIMIT = 10000000; // Daily limit for users with history > 2M
  private readonly PREMIUM_THRESHOLD = 2000000; // Threshold to get premium daily limit

  constructor(
    private prisma: PrismaService,
    private vnpayService: VNPayService,
  ) {}

  /**
   * Check if user has lifetime orders exceeding premium threshold
   */
  private async checkUserPremiumStatus(customerId: number): Promise<boolean> {
    const result = await this.prisma.orders.aggregate({
      where: {
        customer_id: customerId,
        order_status: {
          in: ['DELIVERED', 'PROCESSING', 'PENDING'], // Exclude cancelled orders
          notIn: ['CANCELLED'],
        },
      },
      _sum: {
        total_amount: true,
      },
    });

    const totalAmount = Number(result._sum.total_amount || 0);
    return totalAmount > this.PREMIUM_THRESHOLD;
  }

  /**
   * Get total order amount for a user in the current day
   */
  private async getUserDailyOrderTotal(customerId: number): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const result = await this.prisma.orders.aggregate({
      where: {
        customer_id: customerId,
        created_at: {
          gte: today,
          lt: tomorrow,
        },
        order_status: {
          notIn: ['CANCELLED'],
        },
      },
      _sum: {
        total_amount: true,
      },
    });

    return Number(result._sum.total_amount || 0);
  }

  /**
   * Validate order before creation
   */
  private async validateOrderLimits(customerId: number, orderAmount: number): Promise<void> {
    const orderAmountNum = Number(orderAmount || 0);

    // Check 1: Individual order amount limit
    if (orderAmountNum >= this.MAX_ORDER_AMOUNT) {
      throw new BadRequestException(
        `Số tiền một đơn hàng không được vượt quá ${this.MAX_ORDER_AMOUNT.toLocaleString('vi-VN')} VNĐ`
      );
    }

    // Check 2: Get user's premium status and daily limit
    const isPremium = await this.checkUserPremiumStatus(customerId);
    const dailyLimit = isPremium ? this.PREMIUM_DAILY_LIMIT : this.DEFAULT_DAILY_LIMIT;

    // Check 3: Daily order total
    const todayTotal = await this.getUserDailyOrderTotal(customerId);
    const newTotal = todayTotal + orderAmountNum;

    if (newTotal > dailyLimit) {
      const remainingToday = dailyLimit - todayTotal;
      const limitMessage = isPremium
        ? `Bạn đã đặt đơn hàng với tổng tiền ${todayTotal.toLocaleString('vi-VN')} VNĐ hôm nay. Giới hạn trong ngày là ${dailyLimit.toLocaleString('vi-VN')} VNĐ`
        : `Tổng tiền đơn hàng hôm nay sẽ vượt quá giới hạn ${dailyLimit.toLocaleString('vi-VN')} VNĐ. Bạn có thể đặt tối đa ${remainingToday.toLocaleString('vi-VN')} VNĐ nữa`;

      throw new BadRequestException(limitMessage);
    }
  }

  async create(createOrderDto: CreateOrderDto) {
    const { items, payment_method, ...data } = createOrderDto;

    // Validate order limits before creating
    if (data.customer_id && data.total_amount) {
      await this.validateOrderLimits(data.customer_id, data.total_amount);
    }

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
