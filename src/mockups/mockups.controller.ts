import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
  Query,
  BadRequestException,
} from '@nestjs/common';
import {
  MockupsService,
} from './mockups.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateMockupRenderDto } from './dto/create-mockup-render.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Mockups')
@Controller('mockups')
export class MockupsController {
  constructor(private mockupsService: MockupsService) { }

  @Get('templates')
  @ApiOperation({
    summary: 'Get available mockup templates',
    description: 'Retrieve all available mockup templates for product visualization.',
  })
  @ApiQuery({
    name: 'active',
    type: Boolean,
    required: false,
    description: 'Filter by active templates only (default: true)',
  })
  @ApiQuery({
    name: 'variant_id',
    type: Number,
    required: false,
    description: 'Filter templates for specific product variant',
  })
  @ApiResponse({
    status: 200,
    description: 'List of mockup templates retrieved successfully',
    example: {
      data: [
        {
          mockup_id: 1,
          name: 'T-Shirt Front View',
          mockup_uuid: 'uuid-12345',
          category: 'apparel',
          description: 'Front view of t-shirt mockup',
          active: true,
        },
      ],
      total: 5,
    },
  })
  async getTemplates(
    @Query('active') active: string = 'true',
    @Query('variant_id') variant_id: string,
  ) {
    const isActive = active === 'true';
    const variantId = variant_id ? parseInt(variant_id, 10) : null;
    return this.mockupsService.getTemplates(isActive, variantId);
  }

  @Get('templates/:id')
  @ApiOperation({
    summary: 'Get mockup template details',
    description: 'Retrieve detailed information about a specific mockup template.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Mockup template ID',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Mockup template details retrieved successfully',
    example: {
      mockup_id: 1,
      name: 'T-Shirt Front View',
      mockup_uuid: 'uuid-12345',
      category: 'apparel',
      description: 'Front view of t-shirt mockup',
      template_url: '/mockups/templates/1.png',
      active: true,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid template ID',
  })
  @ApiResponse({
    status: 404,
    description: 'Template not found',
  })
  async getTemplate(@Param('id') id: string) {
    const templateId = parseInt(id, 10);
    if (isNaN(templateId)) {
      throw new BadRequestException('Invalid template ID');
    }
    return this.mockupsService.getTemplate(templateId);
  }

  @Post('render')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Render product mockup',
    description: 'Generate a mockup image of a product with custom design. Requires authenticated user.',
  })
  @ApiBody({
    type: CreateMockupRenderDto,
    description: 'Mockup render parameters',
    examples: {
      example1: {
        value: {
          template_id: 1,
          design_image_url: '/uploads/design-1234.png',
          product_id: 6,
          render_config: {"uuid": "19291d3a-619b-4c37-9fa9-4513342fda71","name": "Front Design","size": { "width": 672, "height": 610},"position": { "top": 50, "left": 50 }}
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Mockup rendered successfully',
    example: {
      render_id: 100,
      user_id: 1,
      template_id: 1,
      mockup_image_url: '/uploads/mockup-render-1234.png',
      design_image_url: '/uploads/design-1234.png',
      status: 'completed',
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid template or design',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async renderMockup(
    @Request() req,
    @Body() createMockupDto: CreateMockupRenderDto,
  ) {
    const userId = req.user.user_id;
    return this.mockupsService.renderMockup(userId, createMockupDto);
  }

  @Get('renders')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get render history',
    description: 'Retrieve the history of all mockups rendered by the authenticated user.',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Maximum number of renders to retrieve (default: 20)',
  })
  @ApiResponse({
    status: 200,
    description: 'Render history retrieved successfully',
    example: {
      data: [
        {
          render_id: 100,
          template_id: 1,
          template_name: 'T-Shirt Front View',
          mockup_image_url: '/uploads/mockup-render-1234.png',
          status: 'completed',
          created_at: '2024-01-15T10:30:00Z',
        },
      ],
      total: 15,
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  async getRenderHistory(
    @Request() req,
    @Query('limit') limit: string = '20',
  ) {
    const userId = req.user.user_id;
    const limitNum = parseInt(limit, 10) || 20;
    return this.mockupsService.getRenderHistory(userId, limitNum);
  }

  @Get('renders/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get render details',
    description: 'Retrieve detailed information about a specific rendered mockup.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Render ID',
    example: 100,
  })
  @ApiResponse({
    status: 200,
    description: 'Render details retrieved successfully',
    example: {
      render_id: 100,
      user_id: 1,
      template_id: 1,
      template_name: 'T-Shirt Front View',
      design_image_url: '/uploads/design-1234.png',
      mockup_image_url: '/uploads/mockup-render-1234.png',
      status: 'completed',
      created_at: '2024-01-15T10:30:00Z',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid render ID',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - render belongs to another user',
  })
  @ApiResponse({
    status: 404,
    description: 'Render not found',
  })
  async getRender(@Request() req, @Param('id') id: string) {
    const userId = req.user.user_id;
    const renderId = parseInt(id, 10);
    if (isNaN(renderId)) {
      throw new BadRequestException('Invalid render ID');
    }
    return this.mockupsService.getRender(renderId, userId);
  }

  @Delete('renders/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete render',
    description: 'Delete a previously rendered mockup from user history.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Render ID',
    example: 100,
  })
  @ApiResponse({
    status: 200,
    description: 'Render deleted successfully',
    example: {
      message: 'Render deleted successfully',
      render_id: 100,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid render ID',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - render belongs to another user',
  })
  @ApiResponse({
    status: 404,
    description: 'Render not found',
  })
  async deleteRender(@Request() req, @Param('id') id: string) {
    const userId = req.user.user_id;
    const renderId = parseInt(id, 10);
    if (isNaN(renderId)) {
      throw new BadRequestException('Invalid render ID');
    }
    await this.mockupsService.deleteRender(renderId, userId);
    return { message: 'Render deleted successfully' };
  }

  @Post('sync-templates')
  @ApiOperation({
    summary: 'Sync mockup templates',
    description: 'Synchronize mockup templates from external source (admin operation).',
  })
  @ApiBody({
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Template name',
          },
          mockup_uuid: {
            type: 'string',
            description: 'Unique identifier from external service',
          },
          category: {
            type: 'string',
            description: 'Template category (e.g., apparel, mug, poster)',
          },
          description: {
            type: 'string',
            description: 'Template description',
          },
        },
        required: ['name', 'mockup_uuid'],
      },
    },
    examples: {
      example1: {
        value: [
          {
            name: 'T-Shirt Front View',
            mockup_uuid: 'uuid-12345',
            category: 'apparel',
            description: 'Front view of t-shirt mockup',
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Templates synchronized successfully',
    example: {
      message: 'Templates synchronized successfully',
      count: 5,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid templates array',
  })
  async syncTemplates(
    @Body() templates: Array<{
      name: string;
      mockup_uuid: string;
      category?: string;
      description?: string;
    }>,
  ) {
    if (!Array.isArray(templates) || templates.length === 0) {
      throw new BadRequestException('Templates array is required');
    }
    return this.mockupsService.syncTemplates(templates);
  }
}

