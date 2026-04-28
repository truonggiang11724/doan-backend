import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  receiver_name!: string;

  @IsString()
  phone!: string;

  @IsNumber()
  ward_id!: number;

  @IsString()
  address_detail!: string;

  @IsOptional()
  @IsBoolean()
  is_default?: boolean;
}