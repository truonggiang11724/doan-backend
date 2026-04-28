import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateReviewMediaDto } from './create-review-media.dto';

export class UpdateReviewDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Customer ID who wrote the review',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  customer_id?: number;

  @ApiPropertyOptional({ example: 5, description: 'Product ID being reviewed' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  product_id?: number;

  @ApiPropertyOptional({
    example: 10,
    description: 'Order item ID tied to this review',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  order_item_id?: number;

  @ApiPropertyOptional({ example: 4, description: 'Rating value (1-5)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  rating?: number;

  @ApiPropertyOptional({
    example: 'Great quality!',
    description: 'Review text content',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/review.jpg',
    description: 'Single media URL (deprecated in favor of media array)',
  })
  @IsOptional()
  @IsString()
  media_url?: string;

  @ApiPropertyOptional({
    type: [CreateReviewMediaDto],
    description: 'Attached media for the review',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateReviewMediaDto)
  media?: CreateReviewMediaDto[];
}
