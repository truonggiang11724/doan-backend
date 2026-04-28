import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { log } from 'node:console';

@Injectable()
export class AdminAuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Admin login
  async login(email: string, password: string) {
    // Validate user exists and is admin
    const user = await this.usersService.findByEmail(email);    
    if (!user || user.role !== 'ADMIN') {
      throw new UnauthorizedException('Invalid credentials or not an admin');
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token
    const token = this.generateToken(user);

    return {
      token,
      admin: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    };
  }

  // Get admin profile
  async getProfile(userId: number) {
    const user = await this.usersService.findById(userId);
    if (!user || user.role !== 'ADMIN') {
      throw new UnauthorizedException('Admin not found');
    }

    return {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
  }

  // Validate admin payload from JWT token
  async validateAdmin(payload: any) {
    const user = await this.usersService.findById(payload.sub as number);
    if (!user || user.role !== 'ADMIN') {
      return null;
    }
    return user;
  }

  // Generate JWT token
  private generateToken(user: any) {
    const payload = {
      sub: user.user_id,
      email: user.email,
      role: user.role,
    };
    return this.jwtService.sign(payload);
  }
}
