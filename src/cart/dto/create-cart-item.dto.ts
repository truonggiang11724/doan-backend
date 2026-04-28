import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCartItemDto {
  @ApiProperty({ example: 1, description: 'Product variant ID to add to cart' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  variant_id!: number;

  @ApiProperty({ example: 2, description: 'Quantity of the variant to add' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantity!: number;
}
