import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  @ApiPropertyOptional({
    example: 1,
    description: 'Customer placing the order (optional if authenticated)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  customer_id?: number;

  @ApiPropertyOptional({ example: 3, description: 'Shipping address ID from customer_addresses table' })
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

  @ApiPropertyOptional({ example: 'COD', description: 'Payment method' })
  @IsOptional()
  @IsString()
  payment_method?: string;

  @ApiPropertyOptional({
    example: 129.99,
    description: 'Total amount for the order',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  total_amount?: number;

  @ApiPropertyOptional({
    type: [CreateOrderItemDto],
    description: 'Order items list',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items?: CreateOrderItemDto[];
}
