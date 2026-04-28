import { IsNumber, IsString, IsOptional, IsObject } from 'class-validator';

export class CreateMockupRenderDto {
  @IsNumber()
  template_id!: number;

  @IsString()
  design_image_url!: string;

  @IsNumber()
  @IsOptional()
  product_id?: number;

  @IsObject()
  @IsOptional()
  render_config?: {
    smart_object_uuid?: string;
    fit?: 'fill' | 'contain' | 'cover';
    color?: string;
    // Export options
    image_format?: 'webp' | 'png' | 'jpg';
    image_size?: number;
    quality?: number;
    // Adjustment layers
    brightness?: number;
    contrast?: number;
    saturation?: number;
    opacity?: number;
    [key: string]: any;
  };
}
