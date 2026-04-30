import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  conversation_id: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsString()
  type?: string;
}
