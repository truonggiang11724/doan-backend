import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { review_media_media_type } from '@prisma/client';

export class CreateReviewMediaDto {
  @ApiProperty({
    example: 'https://example.com/review.jpg',
    description: 'URL to the review media',
  })
  @IsNotEmpty()
  @IsString()
  media_url!: string;

  @ApiPropertyOptional({
    example: 'image',
    enum: review_media_media_type,
    description: 'Type of the media (image/video)',
  })
  @IsOptional()
  @IsEnum(review_media_media_type)
  media_type?: review_media_media_type;
}
