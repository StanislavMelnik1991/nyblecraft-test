import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { UserModule } from 'src/user/user.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PdfService],
  controllers: [PdfController],
  imports: [UserModule, FilesModule],
})
export class PdfModule {}
