import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) { }

  // async create(createCartDto: CreateCartDto) {
  //   const { items, ...data } = createCartDto;

  //   return this.prisma.carts.create({
  //     data: {
  //       ...data,
  //       cart_items: items ? { create: items } : undefined,
  //     },
  //     include: { cart_items: true },
  //   });
  // }

  async findAll() {
    return this.prisma.carts.findMany({
      include: { cart_items: true },
    });
  }

  async findOne(cartId: number) {
    return this.prisma.carts.findUnique({
      where: { cart_id: cartId },
      include: { 
        cart_items: { 
          include: { 
            product_variants: true,
            mockup_renders: true,
          } 
        } 
      },
    });
  }

  async findByCustomerId(customer_id: number) {
    return this.prisma.carts.findFirst({
      where: { customer_id: customer_id },
      include: { 
        cart_items: { 
          include: { 
            product_variants: { include: { products: true } },
            mockup_renders: true,
          } 
        } 
      },
    });
  }

  async addToCart(updateCartDto: UpdateCartDto) {
    const { customer_id, variant_id, render_id } = updateCartDto;

    if (!customer_id) return;
    const cart = await this.findByCustomerId(customer_id);

    for (const item of cart?.cart_items || []) {
      if (item.variant_id == variant_id && item.render_id == render_id) {
        return this.updateQuantity({
          cart_item_id: item.cart_item_id,
          quantity: item.quantity ? item.quantity + 1 : 1,
        });
      }
    }

    return this.prisma.$transaction(async (prisma) => {
      return prisma.cart_items.create({
        data: {
          cart_id: cart?.cart_id,
          variant_id: variant_id,
          quantity: 1,
          render_id: render_id || null,
        },
        include: {product_variants: {include: {products: true}},}
      });
    });
  }

  async remove(cartId: number) {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.cart_items.deleteMany({ where: { cart_id: cartId } });
      return prisma.carts.delete({ where: { cart_id: cartId } });
    });
  }

  async updateQuantity(updateCartItemDto: UpdateCartItemDto) {
    const { cart_item_id, quantity } = updateCartItemDto;

    return this.prisma.$transaction(async (prisma) => {
      return prisma.cart_items.update({
        where: { cart_item_id: cart_item_id },
        data: {
          quantity: quantity,
        },
      });
    });
  }

  async removeItem(cart_item_id: number) {

    return this.prisma.$transaction(async (prisma) => {
      return prisma.cart_items.delete({ where: { cart_item_id: cart_item_id } });
    });
  }

  async removeAllItem(cartId: number) {

    return this.prisma.$transaction(async (prisma) => {
      return prisma.cart_items.deleteMany({ where: { cart_id: cartId } });
    });
  }


}
