import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { mkdir, writeFile, rm } from 'fs';
import { MemoryStoredFile } from 'nestjs-form-data';
import { resolve, join } from 'path';
import { generatePdf } from 'html-pdf-node';
import { v1 } from 'uuid';

@Injectable()
export class FilesService {
  async createImage(file: MemoryStoredFile): Promise<string> {
    try {
      const fileName = `${v1()}.${file.extension}`;
      const filePath = resolve(__dirname, '..', 'static', 'img');
      mkdir(filePath, { recursive: true }, (err) => {
        if (err) {
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
        writeFile(join(filePath, fileName), file.buffer, (err) => {
          if (err)
            throw new HttpException(
              err.message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        });
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
  async createPDF({
    img,
    lastName,
    name,
  }: {
    img: string;
    name: string;
    lastName: string;
  }): Promise<string> {
    try {
      const pdfFileName = `${v1()}.pdf`;
      const pdfFilePath = resolve(__dirname, '..', 'static', 'pdf');
      mkdir(pdfFilePath, { recursive: true }, (err) => {
        if (err) {
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
        const doc = {
          content: `
          <h1>${name}<br>${lastName}</h1>
          <img src="http://localhost:${process.env.PORT}/img/${img}">
          `,
        };
        generatePdf(doc, { format: 'A4' }, (err, buffer) => {
          if (err)
            throw new HttpException(
              err.message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          writeFile(join(pdfFilePath, pdfFileName), buffer, (err) => {
            if (err)
              throw new HttpException(
                err.message,
                HttpStatus.INTERNAL_SERVER_ERROR,
              );
          });
        });
      });

      return pdfFileName;
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
