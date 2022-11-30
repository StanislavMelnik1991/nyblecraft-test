import { MemoryStoredFile } from 'nestjs-form-data';
export declare class FilesService {
    createImage(file: MemoryStoredFile): Promise<string>;
    deleteImage(img: string): Promise<void>;
    createPDF({ img, lastName, name, }: {
        img: string;
        name: string;
        lastName: string;
    }): Promise<string>;
}
