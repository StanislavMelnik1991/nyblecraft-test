import { Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { UserService } from 'src/user/user.service';
import { CreatePdfDTO } from './dto/createPdf.dto';

@Injectable()
export class PdfService {
  constructor(
    private userService: UserService,
    private fileService: FilesService,
  ) {}

  async generatePdf({ email }: CreatePdfDTO) {
    const user = await this.userService.findOneUserByEmail(email);
    const pdf = await this.fileService.createPDF({
      img: user.img,
      lastName: user.lastName,
      name: user.firstName,
    });
    user.pdf = pdf;
    user.save();
    return true;
  }
}
