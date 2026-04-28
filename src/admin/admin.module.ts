import { Module } from '@nestjs/common';
import { AdminAuthModule } from './admin-auth.module';
import { AdminDashboardController } from './admin-dashboard.controller';
import { AdminDashboardService } from './admin-dashboard.service';
import { AdminOrdersController } from './admin-orders.controller';
import { AdminOrdersService } from './admin-orders.service';
import { AdminUsersController } from './admin-users.controller';
import { AdminUsersService } from './admin-users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AdminAuthModule, PrismaModule],
  controllers: [
    AdminDashboardController,
    AdminOrdersController,
    AdminUsersController,
  ],
  providers: [AdminDashboardService, AdminOrdersService, AdminUsersService],
})
export class AdminModule {}
