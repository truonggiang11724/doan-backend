import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createConversation(user: any, dto: CreateConversationDto) {
    const currentUserId = user.user_id;
    let buyerId = dto.buyer_id;
    let sellerId = dto.seller_id;

    if (!buyerId && !sellerId && dto.partner_id) {
      if (user.role === 'SELLER') {
        sellerId = currentUserId;
        buyerId = dto.partner_id;
      } else {
        buyerId = currentUserId;
        sellerId = dto.partner_id;
      }
    }

    if (!buyerId || !sellerId) {
      throw new BadRequestException('buyer_id and seller_id are required');
    }

    if (buyerId === sellerId) {
      throw new BadRequestException('buyer_id and seller_id cannot be the same');
    }

    if (buyerId !== currentUserId && sellerId !== currentUserId) {
      throw new ForbiddenException('You must be one of the conversation participants');
    }

    const existing = await this.prisma.conversations.findFirst({
      where: {
        buyer_id: buyerId,
        seller_id: sellerId,
      },
      include: {
        buyer: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
        seller: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
      },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.conversations.create({
      data: {
        buyer_id: buyerId,
        seller_id: sellerId,
      },
      include: {
        buyer: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
        seller: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
      },
    });
  }

  async findConversations(userId: number) {
    const conversations = await this.prisma.conversations.findMany({
      where: {
        OR: [{ buyer_id: userId }, { seller_id: userId }],
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        buyer: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
        seller: {
          select: { user_id: true, username: true, avatar_url: true, role: true },
        },
        messages: {
          orderBy: { created_at: 'desc' },
          take: 1,
          include: {
            sender: {
              select: { user_id: true, username: true, avatar_url: true },
            },
          },
        },
      },
    });

    return Promise.all(
      conversations.map(async (conversation) => {
        const unreadCount = await this.prisma.messages.count({
          where: {
            conversation_id: conversation.conversation_id,
            sender_id: { not: userId },
            is_read: false,
          },
        });

        return {
          ...conversation,
          lastMessage: conversation.messages.length > 0 ? conversation.messages[0] : null,
          unreadCount,
        };
      }),
    );
  }

  async findMessages(conversationId: number, userId: number) {
    const conversation = await this.prisma.conversations.findUnique({
      where: { conversation_id: conversationId },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    if (conversation.buyer_id !== userId && conversation.seller_id !== userId) {
      throw new ForbiddenException('Access denied');
    }

    await this.prisma.messages.updateMany({
      where: {
        conversation_id: conversationId,
        sender_id: { not: userId },
        is_read: false,
      },
      data: {
        is_read: true,
      },
    });

    return this.prisma.messages.findMany({
      where: { conversation_id: conversationId },
      orderBy: { created_at: 'asc' },
      include: {
        sender: {
          select: { user_id: true, username: true, avatar_url: true },
        },
      },
    });
  }

  async saveMessage(senderId: number, dto: CreateMessageDto) {
    const conversation = await this.prisma.conversations.findUnique({
      where: { conversation_id: dto.conversation_id },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    if (conversation.buyer_id !== senderId && conversation.seller_id !== senderId) {
      throw new ForbiddenException('Not a conversation participant');
    }

    return this.prisma.messages.create({
      data: {
        conversation_id: dto.conversation_id,
        sender_id: senderId,
        content: dto.content,
        type: dto.type || 'text',
      },
      include: {
        sender: {
          select: { user_id: true, username: true, avatar_url: true },
        },
      },
    });
  }

  async getConversationById(conversationId: number) {
    return this.prisma.conversations.findUnique({
      where: { conversation_id: conversationId },
    });
  }

  async isParticipant(conversationId: number, userId: number) {
    const conversation = await this.prisma.conversations.findUnique({
      where: { conversation_id: conversationId },
    });
    return conversation && (conversation.buyer_id === userId || conversation.seller_id === userId);
  }
}
