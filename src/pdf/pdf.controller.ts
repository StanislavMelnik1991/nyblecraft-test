import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { User } from 'src/user/user.entity';
import { CreatePdfDTO } from './dto/createPdf.dto';
import { PdfService } from './pdf.service';

@ApiTags('Pdf')
@Controller('api/pdf')
export class PdfController {
  constructor(private pdfService: PdfService) {}
  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, description: 'user', type: User })
  @UsePipes(ValidationPipe)
  @Post()
  createPdf(@Body() dto: CreatePdfDTO) {
    const result = this.pdfService.generatePdf(dto);
    return result;
  }
}
