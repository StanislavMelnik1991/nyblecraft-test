"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const html_pdf_node_1 = require("html-pdf-node");
const uuid_1 = require("uuid");
let FilesService = class FilesService {
    async createImage(file) {
        try {
            const fileName = `${(0, uuid_1.v1)()}.${file.extension}`;
            const filePath = (0, path_1.resolve)(__dirname, '..', 'static', 'img');
            (0, fs_1.mkdir)(filePath, { recursive: true }, (err) => {
                if (err)
                    throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
            (0, fs_1.writeFile)((0, path_1.join)(filePath, fileName), file.buffer, (err) => {
                if (err)
                    throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
            return fileName;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteImage(img) {
        try {
            const filePath = (0, path_1.resolve)(__dirname, '..', 'static', 'img');
            const file = (0, path_1.join)(filePath, img);
            (0, fs_1.rm)(file, { force: true, recursive: true }, (err) => {
                if (err)
                    throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async createPDF({ img, lastName, name, }) {
        try {
            const pdfFileName = `${(0, uuid_1.v1)()}.pdf`;
            const pdfFilePath = (0, path_1.resolve)(__dirname, '..', 'static', 'pdf');
            (0, fs_1.mkdir)(pdfFilePath, { recursive: true }, (err) => {
                if (err)
                    throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            });
            const doc = {
                content: `
        <h1>${name}<br>${lastName}</h1>
        <img src="http://localhost:${process.env.PORT}/img/${img}">
        `,
            };
            (0, html_pdf_node_1.generatePdf)(doc, { format: 'A4' }, (err, buffer) => {
                if (err)
                    throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                (0, fs_1.writeFile)((0, path_1.join)(pdfFilePath, pdfFileName), buffer, (err) => {
                    if (err)
                        throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                });
            });
            return pdfFileName;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map