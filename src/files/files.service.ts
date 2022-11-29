import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { mkdir, writeFile, rm } from 'fs';
import { MemoryStoredFile } from 'nestjs-form-data';
import { resolve, join } from 'path';
import { v1 } from 'uuid';

@Injectable()
export class FilesService {
  async createImage(file: MemoryStoredFile): Promise<string> {
    try {
      const fileName = `${v1()}.jpg`;
      const filePath = resolve(__dirname, '..', 'static', 'img');
      mkdir(filePath, { recursive: true }, (err) => {
        if (err)
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      });
      writeFile(join(filePath, fileName), file.buffer, (err) => {
        if (err)
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      });
      return fileName;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async deleteImage(img: string): Promise<void> {
    try {
      const filePath = resolve(__dirname, '..', 'static', 'img');
      const file = join(filePath, img);
      rm(file, { force: true, recursive: true }, (err) => {
        if (err)
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      });
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  /* async createPDF(file: {
    buffer: string | NodeJS.ArrayBufferView;
  }): Promise<string> {
    try {
      const fileName = `${v1()}.jpg`;
      const filePath = resolve(__dirname, '..', 'static', 'pdf');
      mkdir(filePath, { recursive: true }, (err) => {
        if (err) console.log(err);
      });
      writeFile(join(filePath, fileName), file.buffer, (err) => {
        if (err) console.log(err);
      });
      return fileName;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } */
}
