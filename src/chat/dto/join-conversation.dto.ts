import { IsNumber } from 'class-validator';

export class JoinConversationDto {
  @IsNumber()
  conversation_id: number;
}
