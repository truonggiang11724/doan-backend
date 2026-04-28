import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminOrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll({
    page = 1,
    limit = 10,
    status,
  }: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const skip = (page - 1) * limit;
    const where: any = status ? { order_status: status } : {};

    const [orders, total] = await Promise.all([
      this.prisma.orders.findMany({
        where,
        skip,
        take: limit,
        include: {
          customers: {
            include: {
              users: true,
            },
          },
          order_items: {
            include: {
              product_variants: {
                include: {
                  products: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      }),
      this.prisma.orders.count({ where }),
    ]);

    return {
      orders: orders.map((order) => ({
        order_id: order.order_id,
        customer: order.customers
          ? {
              username: order.customers.users.username,
              email: order.customers.users.email,
            }
          : null,
        total_amount: order.total_amount,
        status: order.order_status,
        created_at: order.created_at,
      })),
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    const order = await this.prisma.orders.findUnique({
      where: { order_id: id },
      include: {
        customers: {
          include: {
            users: true,
            customer_addresses: true,
          },
        },
        order_items: {
          include: {
            product_variants: {
              include: {
                products: {
                  include: {
                    product_media: true,
                  },
                },
              },
            },
          },
        },
        shipments: true,
        payments: true,
      },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    return {
      order_id: order.order_id,
      customer: order.customers
        ? {
            username: order.customers.users.username,
            email: order.customers.users.email,
            phone: order.customers.users.phone,
          }
        : null,
      shipping_address: order.customers?.customer_addresses?.[0] || null,
      order_items: order.order_items.map((item) => ({
        product_name: item.product_variants?.products?.product_name,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total: Number(item.quantity) * Number(item.unit_price),
      })),
      total_amount: order.total_amount,
      status: order.order_status,
      payment_method: order.payments?.[0]?.payment_method,
      payment_status: order.payment_status,
      shipment: order.shipments?.[0] || null,
      created_at: order.created_at,
    };
  }

  async updateStatus(id: number, status: string) {
    const order = await this.prisma.orders.update({
      where: { order_id: id },
      data: { order_status: status },
      include: {
        customers: {
          include: {
            users: true,
          },
        },
      },
    });

    return {
      order_id: order.order_id,
      customer: order.customers
        ? {
            username: order.customers.users.username,
            email: order.customers.users.email,
          }
        : null,
      total_amount: order.total_amount,
      status: order.order_status,
      updated_at: order.created_at, // Note: orders table might not have updated_at, using created_at
    };
  }
}
