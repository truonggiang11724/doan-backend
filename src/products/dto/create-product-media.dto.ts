import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { product_media_media_type } from '@prisma/client';

export class CreateProductMediaDto {
  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Media URL for the product',
  })
  @IsString()
  media_url!: string;

  @ApiPropertyOptional({
    example: 'image',
    enum: product_media_media_type,
    description: 'Type of media (image or video)',
  })
  @IsOptional()
  @IsEnum(product_media_media_type)
  media_type?: product_media_media_type;

  @ApiPropertyOptional({
    example: true,
    description: 'Whether this media is the primary image for the product',
  })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  is_primary?: boolean;
}
