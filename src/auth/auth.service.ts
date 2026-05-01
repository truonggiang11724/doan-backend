import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  // Register user and hash password with bcrypt
  async register(registerDto: RegisterDto) {
    const { email, password, username, role, shop_name } = registerDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const accountRole = role === 'SELLER' ? 'SELLER' : 'CUSTOMER';

    // Create user
    const user = await this.usersService.create(
      username,
      email,
      hashedPassword,
      accountRole,
    );

    // Generate JWT token
    const token = this.generateToken(user);

    if (accountRole === 'CUSTOMER') {
      await this.prisma.customers.create({
        data: {
          customer_id: user.user_id,
          loyalty_point: 0,
          level: 1,
          status: 'active',
        },
      });

      await this.prisma.carts.create({
        data: {
          customer_id: user.user_id,
        },
      });
    }

    if (accountRole === 'SELLER') {
      await this.prisma.sellers.create({
        data: {
          user_id: user.user_id,
          shop_name: shop_name || username,
          rating: 0,
        },
      });

      await this.prisma.wallets.create({
        data: {
          seller_id: user.user_id,
          available_balance: 0,
          pending_balance: 0,
          withdrawn_balance: 0,
          total_revenue: 0,
        },
      });
    }

    return {
      access_token: token,
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    };
  }

  // Login user and generate JWT token
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Validate user exists
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token
    const token = this.generateToken(user);

    return {
      access_token: token,
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    };
  }

  // Validate user payload from JWT token
  async validateUser(payload: any) {
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
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
