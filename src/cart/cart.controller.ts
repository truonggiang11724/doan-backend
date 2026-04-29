import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Carts')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post('add')
  @ApiOperation({
    summary: 'Add item to cart',
    description: 'Add a product with specific variant to the user cart or create new cart if not exists.',
  })
  @ApiBody({
    type: UpdateCartDto,
    description: 'Cart item details',
    examples: {
      example1: {
        value: {
          customer_id: 1,
          variant_id: 10,
          render_id: 1,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Item added to cart successfully',
    example: {
      cart_id: 1,
      customer_id: 1,
      cart_items: [
        {
          cart_item_id: 1,
          variant_id: 10,
          quantity: 2,
          render_id: 1,
        },
      ],
      message: 'Item added to cart successfully',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid product or variant',
  })
  @ApiResponse({
    status: 404,
    description: 'Product or variant not found',
  })
  create(@Body() updateCartDto: UpdateCartDto) {
    return this.cartService.addToCart(updateCartDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get cart by user ID',
    description: 'Retrieve the shopping cart for a specific user with all items and prices.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Customer ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Cart details retrieved successfully',
    example: {
      cart_id: 1,
      customer_id: 1,
      updated_at: '2024-01-15T10:30:00Z',
      cart_items: [
        {
          cart_item_id: 1,
          variant_id: 10,
          quantity: 2,
          render_id: 1,
          product_name: 'Classic T-Shirt',
          variant_details: {
            color: 'Blue',
            size: 'M',
            price: 99.99,
          },
        },
      ],
      total_items: 2,
      total_amount: 199.98,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Cart not found for this customer',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.findByCustomerId(id);
  }

  @Put('item/:id')
  @ApiOperation({
    summary: 'Update cart item quantity',
    description: 'Update the quantity of a specific item in the cart.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Cart item ID',
    example: 1,
  })
  @ApiBody({
    type: UpdateCartItemDto,
    description: 'New quantity value',
    examples: {
      example1: {
        value: {
          quantity: 5,
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Cart item quantity updated successfully',
    example: {
      cart_item_id: 1,
      quantity: 5,
      unit_price: 99.99,
      total_price: 499.95,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid quantity',
  })
  @ApiResponse({
    status: 404,
    description: 'Cart item not found',
  })
  updateCartItem(@Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartService.updateQuantity(updateCartItemDto);
  }

  @Delete('item/:id')
  @ApiOperation({
    summary: 'Remove item from cart',
    description: 'Delete a specific item from the shopping cart.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Cart item ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Cart item removed successfully',
    example: {
      message: 'Item removed from cart',
      remaining_items: 2,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Cart item not found',
  })
  removeItem(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.removeItem(id);
  }

  @Delete('item')
  @ApiOperation({
    summary: 'Clear entire cart',
    description: 'Delete all items from a specific cart.',
  })
  @ApiBody({
    description: 'Cart ID to clear',
    examples: {
      example1: {
        value: {
          cart_id: 1,
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'All cart items cleared successfully',
    example: {
      message: 'Cart cleared successfully',
      cart_id: 1,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Cart not found',
  })
  remove(@Body() cartId: number) {
    return this.cartService.removeAllItem(cartId);
  }
}
