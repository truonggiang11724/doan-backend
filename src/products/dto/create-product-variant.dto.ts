import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductVariantDto {
  @ApiProperty({ example: 'TS-RED-S', description: 'SKU for the variant' })
  @IsNotEmpty()
  @IsString()
  sku!: string;

  @ApiPropertyOptional({ example: 'Red', description: 'Variant color' })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional({ example: 'S', description: 'Variant size' })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiPropertyOptional({
    example: 19.99,
    description: 'Price for this variant',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    example: 50,
    description: 'Stock quantity for this variant',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  stock_quantity?: number;

  @ApiPropertyOptional({
    example: 'image.png',
    description: 'image for variants',
  })
  @IsOptional()
  @Type(() => String)
  image_url?: string;
}
