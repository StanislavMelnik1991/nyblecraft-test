import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePdfDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email: string;
}
