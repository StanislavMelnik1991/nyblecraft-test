import { CreatePdfDTO } from './dto/createPdf.dto';
import { PdfService } from './pdf.service';
export declare class PdfController {
    private pdfService;
    constructor(pdfService: PdfService);
    createPdf(dto: CreatePdfDTO): Promise<boolean>;
}
