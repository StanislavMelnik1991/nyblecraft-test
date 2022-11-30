import { FilesService } from 'src/files/files.service';
import { UserService } from 'src/user/user.service';
import { CreatePdfDTO } from './dto/createPdf.dto';
export declare class PdfService {
    private userService;
    private fileService;
    constructor(userService: UserService, fileService: FilesService);
    generatePdf({ email }: CreatePdfDTO): Promise<boolean>;
}
