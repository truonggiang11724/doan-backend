import { Logger, UseGuards } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { JoinConversationDto } from './dto/join-conversation.dto';
import { WsJwtGuard } from './guards/ws-jwt.guard';

@WebSocketGateway({
  namespace: '/chat',
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization'],
  },
})
@UseGuards(WsJwtGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger('ChatGateway');
  private readonly userSockets = new Map<number, Set<string>>();

  constructor(private readonly chatService: ChatService) {}

  async handleConnection(client: Socket) {
    const user = client.data.user;
    if (!user) {
      client.disconnect();
      return;
    }

    const socketSet = this.userSockets.get(user.user_id) ?? new Set<string>();
    socketSet.add(client.id);
    this.userSockets.set(user.user_id, socketSet);
    client.join(`user-${user.user_id}`);
    this.logger.log(`User ${user.user_id} connected with socket ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    const user = client.data.user;
    if (!user) {
      return;
    }

    const socketSet = this.userSockets.get(user.user_id);
    if (!socketSet) {
      return;
    }

    socketSet.delete(client.id);
    if (socketSet.size === 0) {
      this.userSockets.delete(user.user_id);
    } else {
      this.userSockets.set(user.user_id, socketSet);
    }

    this.logger.log(`User ${user.user_id} disconnected socket ${client.id}`);
  }

  @SubscribeMessage('joinConversation')
  async handleJoinConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: JoinConversationDto,
  ) {
    const user = client.data.user;
    const { conversation_id } = payload;

    const isParticipant = await this.chatService.isParticipant(conversation_id, user.user_id);
    if (!isParticipant) {
      client.emit('error', { message: 'Not authorized to join this conversation' });
      return;
    }

    await client.join(`conversation-${conversation_id}`);
    client.emit('joinedConversation', { conversation_id });
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: CreateMessageDto,
  ) {
    const user = client.data.user;
    const message = await this.chatService.saveMessage(user.user_id, payload);
    const conversation = await this.chatService.getConversationById(payload.conversation_id);

    const roomName = `conversation-${payload.conversation_id}`;
    this.server.to(roomName).emit('newMessage', message);

    if (conversation) {
      const recipientId = conversation.buyer_id === user.user_id ? conversation.seller_id : conversation.buyer_id;
      this.server.to(`user-${recipientId}`).emit('newMessage', message);
    }
  }
}
