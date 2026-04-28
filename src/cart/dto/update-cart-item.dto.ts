import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCartItemDto {
  @ApiProperty({ example: 1, description: 'Variant ID for the cart item' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  cart_item_id!: number;

  @ApiProperty({
    example: 3,
    description: 'Updated quantity for the cart item',
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantity!: number;
}
