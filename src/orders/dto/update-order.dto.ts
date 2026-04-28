import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateOrderItemDto } from './update-order-item.dto';

export class UpdateOrderDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Customer placing the order',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  customer_id?: number;

  @ApiPropertyOptional({
    example: 2,
    description: 'Seller providing the product(s)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  seller_id?: number;

  @ApiPropertyOptional({ example: 3, description: 'Shipping address ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  address_id?: number;

  @ApiPropertyOptional({ example: 'PENDING', description: 'Order status' })
  @IsOptional()
  @IsString()
  order_status?: string;

  @ApiPropertyOptional({ example: 'UNPAID', description: 'Payment status' })
  @IsOptional()
  @IsString()
  payment_status?: string;

  @ApiPropertyOptional({
    example: 129.99,
    description: 'Total amount for the order',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  total_amount?: number;

  @ApiPropertyOptional({
    type: [UpdateOrderItemDto],
    description: 'Order items list',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateOrderItemDto)
  items?: UpdateOrderItemDto[];
}
