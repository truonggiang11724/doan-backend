import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDto {
  @ApiProperty({
    example: 1,
    description: 'Product variant ID in the order item',
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  variant_id!: number;

  @ApiProperty({ example: 2, description: 'Quantity of the variant ordered' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantity!: number;

  @ApiProperty({ example: 29.99, description: 'Unit price at time of order' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  unit_price!: number;

  @ApiPropertyOptional({ example: 5, description: 'Mockup render ID (if product was customized)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  render_id?: number;
}
