import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UsersService {
  private transporter: nodemailer.Transporter;

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {
    // Initialize email transporter
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password',
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.users.findFirst({
      where: { email: email },
    });
  }

  async findById(userId: number) {
    return this.prisma.users.findUnique({
      where: { user_id: userId },
    });
  }

  async create(username: string, email: string, password_hash: string) {
    return this.prisma.users.create({
      data: {
        username,
        email,
        password_hash,
        role: 'CUSTOMER',
        status: 'active',
      },
    });
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const { phone, username, full_name, avatar_url } = updateUserDto;

    // Update user
    return this.prisma.users.update({
      where: { user_id: userId },
      data: {
        ...(username && { username }),
        ...(phone && { phone }),
        ...(full_name && { full_name }),
        ...(avatar_url && { avatar_url }),
      }
    })

  }

  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    if (oldPassword == newPassword) return { message: 'Mật khẩu mới phải khác mật khẩu cũ' };
    const user = await this.findById(userId);
    const isPasswordValid = await bcrypt.compare(oldPassword, user?.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Mật khẩu cũ không đúng');
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    return this.prisma.users.update({
      where: { user_id: userId},
      data: { password_hash: hashedPassword }
    })
  }

  async forgotPassword(email: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Email không tồn tại trong hệ thống');
    }

    // Generate reset token (expires in 1 hour)
    const resetToken = this.jwtService.sign(
      { user_id: user.user_id, email: user.email },
      { expiresIn: '1h', secret: process.env.JWT_RESET_SECRET || 'reset-secret-key' }
    );

    // Send email with reset link
    const resetLink = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password?token=${resetToken}`;
    
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER || 'noreply@example.com',
        to: email,
        subject: 'Yêu cầu đặt lại mật khẩu',
        html: `
          <h2>Đặt lại mật khẩu</h2>
          <p>Bạn đã yêu cầu đặt lại mật khẩu. Vui lòng click vào link dưới đây để tiếp tục:</p>
          <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
            Đặt lại mật khẩu
          </a>
          <p>Link này sẽ hết hạn sau 1 giờ.</p>
          <p>Nếu bạn không yêu cầu này, vui lòng bỏ qua email này.</p>
        `,
      });

      return { message: 'Email xác thực đã được gửi' };
    } catch (error) {
      throw new BadRequestException('Lỗi khi gửi email, vui lòng thử lại sau');
    }
  }

  async resetPassword(token: string, newPassword: string) {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_RESET_SECRET || 'reset-secret-key',
      });

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      return this.prisma.users.update({
        where: { user_id: decoded.user_id },
        data: { password_hash: hashedPassword }
      });
    } catch (error) {
      throw new BadRequestException('Token không hợp lệ hoặc đã hết hạn');
    }
  }
}
