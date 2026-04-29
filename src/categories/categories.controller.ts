import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new category',
    description: 'Create a new product category with name and optional description.',
  })
  @ApiBody({
    type: CreateCategoryDto,
    description: 'Category details',
    examples: {
      example1: {
        value: {
          name: 'T-Shirts',
          description: 'All kinds of t-shirts',
          thumbnail: '/uploads/category-tshirts.jpg',
          status: 'active',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Category created successfully',
    example: {
      category_id: 5,
      name: 'T-Shirts',
      description: 'All kinds of t-shirts',
      thumbnail: '/uploads/category-tshirts.jpg',
      status: 'active',
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid category data or duplicate name',
  })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all categories',
    description: 'Retrieve list of all product categories with product counts.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of all categories retrieved successfully',
    example: {
      data: [
        {
          category_id: 1,
          name: 'T-Shirts',
          description: 'All kinds of t-shirts',
          thumbnail: '/uploads/category-tshirts.jpg',
          status: 'active',
          created_at: '2024-01-15T10:30:00Z',
          updated_at: '2024-01-15T10:30:00Z',
        },
        {
          category_id: 2,
          name: 'Hoodies',
          description: 'Comfortable hoodies',
          thumbnail: '/uploads/category-hoodies.jpg',
          status: 'active',
          created_at: '2024-01-15T10:30:00Z',
          updated_at: '2024-01-15T10:30:00Z',
        },
      ],
    },
  })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get category details',
    description: 'Retrieve information about a specific category.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Category ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Category details retrieved successfully',
    example: {
      category_id: 1,
      name: 'T-Shirts',
      description: 'All kinds of t-shirts',
      thumbnail: '/uploads/category-tshirts.jpg',
      status: 'active',
      created_at: '2024-01-15T10:30:00Z',
      updated_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update category',
    description: 'Update category information including name and description.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Category ID',
    example: 1,
  })
  @ApiBody({
    type: UpdateCategoryDto,
    description: 'Category update data',
    examples: {
      example1: {
        value: {
          name: 'Premium T-Shirts',
          description: 'Premium quality t-shirts',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Category updated successfully',
    example: {
      category_id: 1,
      name: 'Premium T-Shirts',
      description: 'Premium quality t-shirts',
      updated_at: '2024-01-15T11:00:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid update data',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete category',
    description: 'Permanently delete a category. Category should not contain active products.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Category ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Category deleted successfully',
    example: {
      message: 'Category deleted successfully',
      category_id: 1,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - category contains active products',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
