import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChatService } from './chat.service';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Controller()
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('conversations')
  async getConversations(@Request() req: any) {
    return this.chatService.findConversations(req.user.user_id);
  }

  @Get('messages/:conversationId')
  async getMessages(@Param('conversationId') conversationId: string, @Request() req: any) {
    return this.chatService.findMessages(Number(conversationId), req.user.user_id);
  }

  @Post('conversations')
  async createConversation(@Body() body: CreateConversationDto, @Request() req: any) {
    return this.chatService.createConversation(req.user, body);
  }
}
