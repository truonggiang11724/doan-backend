import { IsEnum, IsOptional } from 'class-validator';

export enum RefundStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
}

export class UpdateRefundDto {
  @IsOptional()
  @IsEnum(RefundStatus)
  status?: RefundStatus;
}