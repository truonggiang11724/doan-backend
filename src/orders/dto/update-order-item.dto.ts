import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateOrderItemDto {
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
}
