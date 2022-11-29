import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FilesModule } from 'src/files/files.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([User]),
    FilesModule,
    NestjsFormDataModule,
  ],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
