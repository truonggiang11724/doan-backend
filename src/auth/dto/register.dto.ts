import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'johndoe', description: 'Unique username for login' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username!: string;

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
}
