import { MemoryStoredFile } from 'nestjs-form-data';
export declare class CreateUserDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly img: MemoryStoredFile;
}
