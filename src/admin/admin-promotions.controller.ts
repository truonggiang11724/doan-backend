import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  ParseIntPipe,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AdminPromotionsService } from './admin-promotions.service';
import { AdminGuard } from './admin.guard';

class CreatePromotionDto {
  promotion_type!: string;
  discount_value!: number;
  min_order_value?: number;
  start_date!: string;
  end_date!: string;
  status!: string;
}

class UpdatePromotionDto {
  promotion_type?: string;
  discount_value?: number;
  min_order_value?: number;
  start_date?: string;
  end_date?: string;
  status?: string;
}

@ApiTags('Admin Promotions')
@Controller('admin/promotions')
export class AdminPromotionsController {
  constructor(private readonly adminPromotionsService: AdminPromotionsService) {}

  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all promotions',
    description: 'Retrieve list of all promotions with pagination.',
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
    description: 'Page number (default: 1)',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Items per page (default: 10)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of promotions retrieved successfully',
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.adminPromotionsService.findAll({ page, limit });
  }

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a new promotion',
    description: 'Create a new promotion with the provided data.',
  })
  @ApiBody({
    type: CreatePromotionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Promotion created successfully',
  })
  async create(@Body() createPromotionDto: CreatePromotionDto) {
    return this.adminPromotionsService.create(createPromotionDto);
  }

  @Put(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update a promotion',
    description: 'Update an existing promotion with the provided data.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Promotion ID',
  })
  @ApiBody({
    type: UpdatePromotionDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Promotion updated successfully',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePromotionDto: UpdatePromotionDto,
  ) {
    return this.adminPromotionsService.update(id, updatePromotionDto);
  }

  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete a promotion',
    description: 'Delete an existing promotion.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Promotion ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Promotion deleted successfully',
  })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.adminPromotionsService.delete(id);
  }
}