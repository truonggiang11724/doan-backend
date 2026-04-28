import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt-admin.strategy';
import { AdminGuard } from './admin.guard';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, JwtStrategy, AdminGuard],
  exports: [AdminGuard, JwtStrategy],
})
export class AdminAuthModule {}
