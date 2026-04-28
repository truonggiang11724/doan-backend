import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SellerService {
  constructor(private prisma: PrismaService) {}

  async getDashboardStats(sellerId: number) {
    try {
      const products = await this.prisma.products.count({
        where: { seller_id: sellerId },
      });

      const wallet = await this.prisma.wallets.findFirst({
        where: { seller_id: sellerId },
      });

      // Get total orders for seller's products
      const orders = await this.prisma.orders.findMany({
        include: {
          order_items: {
            include: {
              product_variants: {
                include: { products: true },
              },
            },
          },
        },
      });

      const sellerOrders = orders.filter((order) =>
        order.order_items.some((item) =>
          item.product_variants?.products?.seller_id === sellerId
        )
      );

      const totalRevenue = sellerOrders.reduce((sum, order) => {
        const sellerOrderAmount = order.order_items
          .filter((item) => item.product_variants?.products?.seller_id === sellerId)
          .reduce((itemSum, item) => itemSum + (Number(item.unit_price || 0) * Number(item.quantity || 0)), 0);
        return sum + sellerOrderAmount;
      }, 0);

      const reviews = await this.prisma.reviews.count({
        where: {
          order_items: {
            product_variants: {
              products: { seller_id: sellerId },
            },
          },
        },
      });

      return {
        totalProducts: products,
        totalOrders: sellerOrders.length,
        totalRevenue: totalRevenue.toFixed(2),
        totalReviews: reviews,
        wallet: {
          availableBalance: wallet?.available_balance || 0,
          pendingBalance: wallet?.pending_balance || 0,
          withdrawnBalance: wallet?.withdrawn_balance || 0,
          totalRevenue: wallet?.total_revenue || 0,
        },
      };
    } catch (error) {
      throw new Error(`Failed to get dashboard stats:`);
    }
  }

  async getSellerProducts(sellerId: number) {
    return this.prisma.products.findMany({
      where: { seller_id: sellerId },
      include: {
        product_variants: true,
        product_media: true,
        reviews: true,
        categories: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async getSellerOrders(sellerId: number) {
    const orders = await this.prisma.orders.findMany({
      include: {
        order_items: {
          include: {
            product_variants: {
              include: { products: true },
            },
          },
        },
        customers: true,
        payments: true,
      },
      orderBy: { created_at: 'desc' },
    });

    // Filter orders that contain seller's products
    return orders.filter((order) =>
      order.order_items.some((item) =>
        item.product_variants?.products?.seller_id === sellerId
      )
    );
  }

  async getSellerReviews(sellerId: number) {
    const reviews = await this.prisma.reviews.findMany({
      include: {
        review_media: true,
        customers: true,
        order_items: {
          include: {
            product_variants: {
              include: { products: true },
            },
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    // Filter reviews for seller's products
    return reviews.filter((review) => {
      const orderItems = review.order_items;
      return (
        orderItems && 
        Array.isArray(orderItems) && 
        orderItems.some((item) =>
          item.product_variants?.products?.seller_id === sellerId
        )
      );
    });
  }

  async getSellerWallet(sellerId: number) {
    const wallet = await this.prisma.wallets.findFirst({
      where: { seller_id: sellerId },
      include: {
        wallet_transactions: {
          orderBy: { created_at: 'desc' },
          take: 20,
        },
      },
    });

    return wallet;
  }

  async getSellerAnalytics(sellerId: number) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const orders = await this.prisma.orders.findMany({
      where: {
        created_at: { gte: thirtyDaysAgo },
      },
      include: {
        order_items: {
          include: {
            product_variants: {
              include: { products: true },
            },
          },
        },
      },
    });

    const sellerOrders = orders.filter((order) =>
      order.order_items.some((item) =>
        item.product_variants?.products?.seller_id === sellerId
      )
    );

    const dailyRevenue: Record<string, number> = {};

    sellerOrders.forEach((order) => {
      const createdAt = order.created_at;
      if (createdAt) {
        const date = new Date(createdAt).toISOString().split('T')[0];
        const amount = order.order_items
          .filter((item) => item.product_variants?.products?.seller_id === sellerId)
          .reduce((sum, item) => sum + (Number(item.unit_price || 0) * Number(item.quantity || 0)), 0);

        dailyRevenue[date] = (dailyRevenue[date] || 0) + amount;
      }
    });

    return {
      totalOrders: sellerOrders.length,
      totalRevenue: Object.values(dailyRevenue).reduce((a, b) => a + b, 0).toFixed(2),
      averageOrderValue: sellerOrders.length > 0
        ? (Object.values(dailyRevenue).reduce((a, b) => a + b, 0) / sellerOrders.length).toFixed(2)
        : 0,
      dailyRevenue,
    };
  }
}
