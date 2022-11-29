import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  IsFile,
  MaxFileSize,
  HasMimeType,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class UpdateUserBodyDTO {
  @ApiProperty({ example: 'John', description: 'user name' })
  @IsString({ message: 'name mast be string' })
  @Length(2, 16, { message: 'name mast be 2 to 16 characters' })
  readonly firstName?: string;

  @ApiProperty({ example: 'Smith', description: 'user last name' })
  @IsString({ message: 'name mast be string' })
  @Length(2, 16, { message: 'name mast be 2 to 16 characters' })
  readonly lastName?: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email?: string;

  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(['image/jpeg', 'image/png'])
  @ApiProperty({ description: 'user image' })
  readonly img?: MemoryStoredFile;
}
