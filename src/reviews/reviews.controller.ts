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
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a product review',
    description: 'Submit a review for a purchased product with rating and comment.',
  })
  @ApiBody({
    type: CreateReviewDto,
    description: 'Review details',
    examples: {
      example1: {
        value: {
          product_id: 5,
          customer_id: 1,
          order_item_id: 10,
          rating: 5,
          content: 'Great quality and fast shipping!',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Review created successfully',
    example: {
      review_id: 50,
      product_id: 5,
      customer_id: 1,
      order_item_id: 10,
      rating: 5,
      content: 'Great quality and fast shipping!',
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid review data or product not found',
  })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all reviews',
    description: 'Retrieve all product reviews with optional filtering.',
  })
  @ApiQuery({
    name: 'productId',
    type: Number,
    required: false,
    description: 'Filter reviews by product ID',
  })
  @ApiQuery({
    name: 'rating',
    type: Number,
    required: false,
    description: 'Filter by minimum rating (1-5)',
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
    description: 'Items per page',
  })
  @ApiResponse({
    status: 200,
    description: 'List of reviews retrieved successfully',
    example: {
      data: [
        {
          review_id: 50,
          product_id: 5,
          product_name: 'Classic T-Shirt',
          customer_id: 1,
          customer_name: 'John Doe',
          order_item_id: 10,
          rating: 5,
          content: 'Great quality and fast shipping!',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 150,
      page: 1,
      limit: 10,
      average_rating: 4.5,
    },
  })
  findAll(
    @Query('productId') productId?: number,
    @Query('rating') rating?: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get review details',
    description: 'Retrieve detailed information about a specific review.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Review ID',
    example: 50,
  })
  @ApiResponse({
    status: 200,
    description: 'Review details retrieved successfully',
    example: {
      review_id: 50,
      product_id: 5,
      product_name: 'Classic T-Shirt',
      customer_id: 1,
      customer_name: 'John Doe',
      order_item_id: 10,
      rating: 5,
      content: 'Great quality and fast shipping!',
      review_media: [
        {
          media_id: 1,
          media_url: '/uploads/review-photo-1.jpg',
          media_type: 'image',
        },
      ],
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Review not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update review',
    description: 'Edit an existing product review.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Review ID',
    example: 50,
  })
  @ApiBody({
    type: UpdateReviewDto,
    description: 'Review update data',
    examples: {
      example1: {
        value: {
          rating: 4,
          content: 'Still satisfied with the quality',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Review updated successfully',
    example: {
      review_id: 50,
      rating: 4,
      title: 'Very Good Product',
      comment: 'Still satisfied with the quality',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid review data',
  })
  @ApiResponse({
    status: 404,
    description: 'Review not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete review',
    description: 'Remove a product review.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Review ID',
    example: 50,
  })
  @ApiResponse({
    status: 200,
    description: 'Review deleted successfully',
    example: {
      message: 'Review deleted successfully',
      review_id: 50,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Review not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewsService.remove(id);
  }
}
