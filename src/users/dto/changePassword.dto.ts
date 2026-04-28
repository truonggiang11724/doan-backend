import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class changePasswordDto {
  @ApiProperty({ example: 'password123', description: 'Old password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  oldPassword!: string;

  @ApiProperty({
    example: '0912345678',
    description: 'New password',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  newPassword!: string;
}
