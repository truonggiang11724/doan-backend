import { CanActivate, ExecutionContext, Injectable, WsException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client = context.switchToWs().getClient<Socket>();
    const token = this.extractToken(client);

    if (!token) {
      throw new WsException('Unauthorized');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET || 'secret-key',
      });
      client.data.user = payload;
      return true;
    } catch (error) {
      throw new WsException('Invalid token');
    }
  }

  private extractToken(client: Socket): string | null {
    const authToken = client.handshake.auth?.token as string | undefined;
    if (authToken) {
      return authToken;
    }

    const header = client.handshake.headers.authorization as string | undefined;
    if (!header) {
      return null;
    }

    const [, token] = header.split(' ');
    return token || null;
  }
}
