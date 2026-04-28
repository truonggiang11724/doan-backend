import { Module } from '@nestjs/common';
import { MockupsService } from './mockups.service';
import { MockupsController } from './mockups.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [MockupsController],
  providers: [MockupsService],
  exports: [MockupsService],
})
export class MockupsModule {}
