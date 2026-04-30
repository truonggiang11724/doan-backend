import { Module } from '@nestjs/common';
import { RefundsService } from './refunds.service';
import { RefundsController } from './refunds.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [RefundsController],
  providers: [RefundsService],
  imports: [PrismaModule],
})
export class RefundsModule {}