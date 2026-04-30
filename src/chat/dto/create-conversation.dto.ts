import { IsNumber, IsOptional } from 'class-validator';

export class CreateConversationDto {
  @IsOptional()
  @IsNumber()
  buyer_id?: number;

  @IsOptional()
  @IsNumber()
  seller_id?: number;

  @IsOptional()
  @IsNumber()
  partner_id?: number;
}
