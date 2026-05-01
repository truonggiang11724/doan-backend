import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'johndoe', description: 'Unique username for login' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username!: string;

  @ApiPropertyOptional({ example: 'SELLER', description: 'Account role, use SELLER for seller registration' })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiPropertyOptional({ example: 'My Shop', description: 'Tên cửa hàng của seller' })
  @IsOptional()
  @IsString()
  shop_name?: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'User email address',
  })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'secret123',
    description: 'User password (min 6 characters)',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiPropertyOptional({
    example: 'John Doe',
    description: 'User full name',
  })
  @IsOptional()
  @IsString()
  full_name?: string;

  @ApiPropertyOptional({
    example: '0123456789',
    description: 'User phone number',
  })
  @IsOptional()
  @IsString()
  phone?: string;
}
