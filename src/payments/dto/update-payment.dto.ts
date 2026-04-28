import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePaymentDto {
  @ApiPropertyOptional({
    example: 10,
    description: 'Order ID this payment applies to',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  order_id?: number;

  @ApiPropertyOptional({
    example: 'CREDIT_CARD',
    description: 'Payment method',
  })
  @IsOptional()
  @IsString()
  payment_method?: string;

  @ApiPropertyOptional({
    example: 'Stripe',
    description: 'Payment provider name',
  })
  @IsOptional()
  @IsString()
  provider?: string;

  @ApiPropertyOptional({ example: 199.99, description: 'Payment amount' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional({ example: 'COMPLETED', description: 'Payment status' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({
    example: 'TX123456',
    description: 'External transaction code',
  })
  @IsOptional()
  @IsString()
  transaction_code?: string;
}
