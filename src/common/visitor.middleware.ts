import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VisitorMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Track visitor for GET requests to main routes
    if (req.method === 'GET') {
      try {
        // Log visitor access - in production, would update database
        console.log(`[VISITOR] ${req.method} ${req.path} - IP: ${req.ip}`);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    }

    next();
  }
}