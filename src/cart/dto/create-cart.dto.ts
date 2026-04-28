import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CreateCartItemDto } from './create-cart-item.dto';

export class CreateCartDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Customer ID who owns the cart',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  customer_id?: number;

  @ApiPropertyOptional({
    type: [CreateCartItemDto],
    description: 'Array of cart items to create',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCartItemDto)
  items?: CreateCartItemDto[];
}
