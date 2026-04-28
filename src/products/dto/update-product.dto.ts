import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { products_status } from '@prisma/client';
import { CreateProductMediaDto } from './create-product-media.dto';
import { CreateProductVariantDto } from './create-product-variant.dto';

export class UpdateProductDto {
  @ApiPropertyOptional({ example: 'Graphic Tee', description: 'Product name' })
  @IsOptional()
  @IsString()
  product_name?: string;

  @ApiPropertyOptional({
    example: 'A comfortable cotton tee',
    description: 'Product description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'active',
    enum: products_status,
    description: 'Product status',
  })
  @IsOptional()
  @IsEnum(products_status)
  status?: products_status;

  @ApiPropertyOptional({ example: 1, description: 'Seller user ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  seller_id?: number;

  @ApiPropertyOptional({ example: 2, description: 'Category ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  category_id?: number;

  @ApiPropertyOptional({
    type: [CreateProductVariantDto],
    description: 'Variants for the product',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  product_variants?: CreateProductVariantDto[];

  @ApiPropertyOptional({
    type: [CreateProductMediaDto],
    description: 'Media items for the product',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductMediaDto)
  product_media?: CreateProductMediaDto[];
}
