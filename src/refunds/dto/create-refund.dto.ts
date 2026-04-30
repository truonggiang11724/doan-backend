import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRefundDto {
  @IsNotEmpty()
  order_id!: number;

  @IsOptional()
  @IsString()
  reason?: string;
}