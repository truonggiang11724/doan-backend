import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMockupRenderDto } from './dto/create-mockup-render.dto';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import FormData from 'form-data';

@Injectable()
export class MockupsService {
  private readonly SUDOMOCK_API_URL = 'https://api.sudomock.com/api/v1/renders';
  private readonly SUDOMOCK_API_KEY = process.env.SUDOMOCK_API_KEY;
  private readonly REMOVE_BG_API_URL = 'https://api.remove.bg/v1.0/removebg';
  private readonly REMOVE_BG_API_KEY = process.env.REMOVE_BG_API_KEY;

  constructor(private prisma: PrismaService) { }

  /**
   * Get all available mockup templates
   * @param isActive - Filter by active status
   * @param variantId - Optional variant ID to filter templates
   */
  async getTemplates(isActive: boolean = true, variantId?: number | null) {
    const where: any = {};

    if (isActive) {
      where.is_active = true;
    }

    if (variantId) {
      where.variant_id = variantId;
    }

    return this.prisma.mockup_templates.findMany({
      where,
      orderBy: { created_at: 'desc' },
    });
  }

  /**
   * Get mockup template by ID
   */
  async getTemplate(templateId: number) {
    const template = await this.prisma.mockup_templates.findUnique({
      where: { template_id: templateId },
    });

    if (!template) {
      throw new BadRequestException('Mockup template not found');
    }

    return template;
  }

  /**
   * Remove background from design image using remove.bg API
   */
  private async removeBackground(imageUrl: string): Promise<string> {
    if (!this.REMOVE_BG_API_KEY) {
      throw new Error('Remove.bg API key not configured. Set REMOVE_BG_API_KEY environment variable.');
    }

    try {
      // Download the image
      const imageResponse = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        timeout: 10000,
      });

      // Prepare form data
      const formData = new FormData();
      formData.append('image_file', imageResponse.data, {
        filename: 'design.png',
        contentType: imageResponse.headers['content-type'] || 'image/png',
      });
      formData.append('size', 'auto');

      // Call remove.bg API
      const removeBgResponse = await axios.post(this.REMOVE_BG_API_URL, formData, {
        headers: {
          ...formData.getHeaders(),
          'X-Api-Key': this.REMOVE_BG_API_KEY,
        },
        responseType: 'arraybuffer',
        timeout: 30000,
      });

      // Save the processed image
      const uniqueName = `bg-removed-${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
      const filePath = path.join('./uploads', uniqueName);
      fs.writeFileSync(filePath, removeBgResponse.data);

      return `/uploads/${uniqueName}`;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.errors?.[0]?.title || error.message;
        throw new Error(`Remove.bg API error: ${errorMessage}`);
      }
      throw error;
    }
  }

  /**
   * Create mockup template (sync from DynamicMockups)
   */
  async createTemplate(data: {
    name: string;
    mockup_uuid: string;
    description?: string;
    thumbnail_url?: string;
    category?: string;
    smart_objects?: any;
  }) {
    // Check if template already exists
    const existing = await this.prisma.mockup_templates.findUnique({
      where: { mockup_uuid: data.mockup_uuid },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.mockup_templates.create({
      data: {
        name: data.name,
        mockup_uuid: data.mockup_uuid,
        description: data.description,
        thumbnail_url: data.thumbnail_url,
        category: data.category,
        smart_objects: data.smart_objects,
        is_active: true,
      },
    });
  }

  /**
   * Render mockup using DynamicMockups API
   */
  async renderMockup(userId: number, createMockupDto: CreateMockupRenderDto) {
    // Validate template exists
    const template = await this.getTemplate(createMockupDto.template_id);    

    // Validate design image URL
    if (!createMockupDto.design_image_url) {
      throw new BadRequestException('Design image URL is required');
    }

    // Check if design image is accessible
    try {
      await axios.head(createMockupDto.design_image_url, { timeout: 5000 });
    } catch (error) {
      throw new BadRequestException('Design image URL is not accessible');
    }

    // Remove background from design image
    const processedDesignUrl = await this.removeBackground(createMockupDto.design_image_url);

    // Create initial render record with pending status
    const renderRecord = await this.prisma.mockup_renders.create({
      data: {
        customer_id: userId,
        product_id: createMockupDto.product_id,
        template_id: createMockupDto.template_id,
        design_image_url: process.env.BACKEND_URL + processedDesignUrl,
        render_config: JSON.stringify(createMockupDto.render_config),
        status: 'processing',
      },
    });

    try {
      // Prepare smart objects for Sudomock API
      const smartObjects = this.prepareSmartObjects(
        template,
        process.env.BACKEND_URL + processedDesignUrl,
        createMockupDto.render_config,
      );

      // Call Sudomock API
      const renderResponse = await this.callSudomockAPI(
        template.mockup_uuid,
        smartObjects,
        createMockupDto.render_config,
      );



      // Update render record with success
      const updatedRender = await this.prisma.mockup_renders.update({
        where: { render_id: renderRecord.render_id },
        data: {
          rendered_image_url: renderResponse.rendered_image_url,
          status: 'completed',
        },
        include: {
          mockup_templates: true,
        },
      });

      return updatedRender;
    } catch (error) {
      // Update render record with error
      await this.prisma.mockup_renders.update({
        where: { render_id: renderRecord.render_id },
        data: {
          status: 'failed',
          error_message: '',
        },
      });

      throw new InternalServerErrorException(
        `Failed to render mockup: `,
      );
    }
  }

  /**
   * Get render history for customer
   */
  async getRenderHistory(userId: number, limit: number = 20) {
    return this.prisma.mockup_renders.findMany({
      where: { customer_id: userId },
      include: {
        mockup_templates: true,
        products: { select: { product_id: true, product_name: true } },
      },
      orderBy: { created_at: 'desc' },
      take: limit,
    });
  }

  /**
   * Get single render by ID
   */
  async getRender(renderId: number, userId: number) {
    const render = await this.prisma.mockup_renders.findUnique({
      where: { render_id: renderId },
      include: {
        mockup_templates: true,
        products: true,
      },
    });

    if (!render) {
      throw new BadRequestException('Render not found');
    }

    if (render.customer_id !== userId) {
      throw new BadRequestException('Unauthorized access to this render');
    }

    return render;
  }

  /**
   * Delete render
   */
  async deleteRender(renderId: number, userId: number) {
    const render = await this.getRender(renderId, userId);

    return this.prisma.mockup_renders.delete({
      where: { render_id: renderId },
    });
  }

  /**
   * Prepare smart objects for Sudomock API
   */
  private prepareSmartObjects(template: any, designUrl: string, config?: any): Array<any> {
    const smartObjects: Array<any> = [];    

    // If template has smart_objects defined, use them
    if (template.smart_objects && Array.isArray(template.smart_objects)) {
      const mapped = (template.smart_objects as any[]).map((obj: any) => ({
        uuid: obj.uuid || obj.id,
        asset: {
          url: designUrl,
          fit: config?.fit || 'fill',
          size: {
            width: 672,
            height: 610
          },
          position: {
            top: 50,
            left: 50
          },
          rotate: 0
        },
      }));
      smartObjects.push(...mapped);
    } else {
      // Use default single smart object
      smartObjects.push({
        uuid: config?.uuid || 'default',
        asset: {
          url: designUrl,
          fit: config?.fit || 'fill',
          size: {
            width: 672,
            height: 610
          },
          position: {
            top: 50,
            left: 50
          },
          rotate: 0
        },
      });
    }

    return smartObjects;
  }

  /**
   * Call Sudomock API to render mockup
   */
  private async callSudomockAPI(
    mockupUuid: string,
    smartObjects: any[],
    config?: any,
  ) {
    if (!this.SUDOMOCK_API_KEY) {
      throw new Error(
        'Sudomock API key not configured. Set SUDOMOCK_API_KEY environment variable.',
      );
    }

    try {
      const requestBody = {
        mockup_uuid: mockupUuid,
        smart_objects: smartObjects,
        export_options: {
          image_format: config?.image_format || 'webp',
          image_size: config?.image_size || 1920,
          quality: config?.quality || 95,
        },
      };
      console.log(JSON.stringify(requestBody));


      const response = await axios.post(
        this.SUDOMOCK_API_URL,
        (JSON.stringify(requestBody)),
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': this.SUDOMOCK_API_KEY,
            'Accept': 'application/json',
          },
          timeout: 30000,
        },
      );

      if (!response.data?.success || !response.data?.data?.print_files?.[0]?.export_path) {
        throw new Error('No export_path in response');
      }

      return {
        rendered_image_url: response.data.data.print_files[0].export_path,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.detail || error.message;
        throw new Error(`Sudomock API error: ${errorMessage}`);
      }
      throw error;
    }
  }

  /**
   * Sync templates from a predefined list
   * This would typically be called periodically or on demand
   */
  async syncTemplates(templates: Array<{
    name: string;
    mockup_uuid: string;
    category?: string;
    description?: string;
  }>) {
    const results: any = [];

    for (const template of templates) {
      const result = await this.createTemplate(template);
      results.push(result);
    }

    return results;
  }
}
