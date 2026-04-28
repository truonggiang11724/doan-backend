import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'T-Shirts', description: 'Category name' })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiPropertyOptional({
    example: 'Casual T-shirt category',
    description: 'Category description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/thumb.jpg',
    description: 'Thumbnail URL',
  })
  @IsOptional()
  @IsString()
  thumbnail?: string;

  @ApiPropertyOptional({ example: 'active', description: 'Category status' })
  @IsOptional()
  @IsString()
  status?: string;
}
