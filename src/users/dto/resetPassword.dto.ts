import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ example: 'token123', description: 'Reset token sent to email' })
  @IsNotEmpty()
  @IsString()
  token!: string;

  @ApiProperty({ example: 'newPassword123', description: 'New password' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  newPassword!: string;
}
