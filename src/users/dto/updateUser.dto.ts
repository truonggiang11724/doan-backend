import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, isPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'johndoe', description: 'username' })
  @IsOptional()
  @IsString()
  @MinLength(3)
  username?: string;

  @ApiProperty({
    example: '0912345678',
    description: 'User phone number',
  })
  @IsOptional()
  @MinLength(10)
  @MaxLength(10)
  phone?: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'User full name',
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  full_name?: string;

  @ApiProperty({
    example: '/uploads/avatar.jpg',
    description: 'User avatar URL',
  })
  @IsOptional()
  @IsString()
  avatar_url?: string;
}
