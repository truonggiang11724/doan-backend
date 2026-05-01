import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new product',
    description: 'Create a new product with images, variants, and pricing information.',
  })
  @ApiBody({
    type: CreateProductDto,
    description: 'Product details',
    examples: {
      example1: {
        value: {
          product_name: 'Classic T-Shirt',
          description: 'High quality cotton t-shirt',
          category_id: 1,
          seller_id: 5,
          status: 'active',
          product_variants: [
            {
              sku: 'TS-BLUE-M',
              color: 'Blue',
              size: 'M',
              price: 99.99,
              stock_quantity: 50,
              image_url: '/uploads/variant-1.jpg',
            },
          ],
          product_media: [
            {
              media_url: '/uploads/product-1-main.jpg',
              media_type: 'image',
              is_primary: true,
            },
          ],
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Product created successfully',
    example: {
      product_id: 10,
      product_name: 'Classic T-Shirt',
      category_id: 1,
      seller_id: 5,
      status: 'active',
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid product data',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all products',
    description: 'Retrieve list of all products with optional filtering and pagination.',
  })
  @ApiQuery({
    name: 'categoryId',
    type: Number,
    required: false,
    description: 'Filter products by category ID',
  })
  @ApiQuery({
    name: 'sellerId',
    type: Number,
    required: false,
    description: 'Filter products by seller ID',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Number of products per page',
  })
  @ApiResponse({
    status: 200,
    description: 'List of products retrieved successfully',
    example: {
      data: [
        {
          product_id: 10,
          product_name: 'Classic T-Shirt',
          category_id: 1,
          seller_id: 5,
          status: 'active',
          rating: 4.5,
          review_count: 25,
          variants: [
            {
              variant_id: 1,
              sku: 'TS-BLUE-M',
              color: 'Blue',
              size: 'M',
              price: 99.99,
              stock_quantity: 20,
            },
          ],
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 100,
      page: 1,
      limit: 10,
    },
  })
  findAll(
    @Query('categoryId') categoryId?: number,
    @Query('sellerId') sellerId?: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.productsService.findAll();
  }

  @Get('top-selling')
  @ApiOperation({
    summary: 'Get top selling products',
    description: 'Retrieve the top selling products ordered by sold quantity.',
  })
  @ApiResponse({
    status: 200,
    description: 'Top selling products retrieved successfully',
    example: [
      {
        product_id: 10,
        product_name: 'Classic T-Shirt',
        soldQuantity: 145,
        category_id: 1,
        seller_id: 5,
        product_media: [
          {
            media_id: 1,
            media_url: '/uploads/product-1-main.jpg',
            media_type: 'image',
            is_primary: true,
          },
        ],
        product_variants: [
          {
            variant_id: 1,
            sku: 'TS-BLUE-M',
            color: 'Blue',
            size: 'M',
            price: 99.99,
            stock_quantity: 20,
          },
        ],
      },
    ],
  })
  getTopSelling() {
    return this.productsService.findTopSelling();
  }

  @Get(':id/similar')
  @ApiOperation({
    summary: 'Get similar products',
    description: 'Retrieve similar products based on category and price range.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product ID to find similar products for',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Similar products retrieved successfully',
  })
  getSimilarProducts(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findSimilarProducts(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get product details',
    description: 'Retrieve complete information about a specific product including variants and reviews.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product ID',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Product details retrieved successfully',
    example: {
      product_id: 10,
      product_name: 'Classic T-Shirt',
      description: 'High quality cotton t-shirt',
      category_id: 1,
      seller_id: 5,
      status: 'active',
      rating: 4.5,
      review_count: 25,
      product_variants: [
        {
          variant_id: 1,
          sku: 'TS-BLUE-M',
          color: 'Blue',
          size: 'M',
          price: 99.99,
          stock_quantity: 20,
          image_url: '/uploads/variant-1.jpg',
        },
      ],
      product_media: [
        {
          media_id: 1,
          media_url: '/uploads/product-1-main.jpg',
          media_type: 'image',
          is_primary: true,
        },
      ],
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update product',
    description: 'Update product information, pricing, and stock details.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product ID',
    example: 10,
  })
  @ApiBody({
    type: UpdateProductDto,
    description: 'Product update data',
    examples: {
      example1: {
        value: {
          product_name: 'Classic T-Shirt Premium',
          status: 'active',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Product updated successfully',
    example: {
      product_id: 10,
      name: 'Classic T-Shirt Premium',
      base_price: 119.99,
      stock: 100,
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid update data',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete product',
    description: 'Permanently delete a product and all its associated data.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Product ID',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Product deleted successfully',
    example: {
      message: 'Product deleted successfully',
      product_id: 10,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
