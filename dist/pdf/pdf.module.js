"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfModule = void 0;
const common_1 = require("@nestjs/common");
const pdf_service_1 = require("./pdf.service");
const pdf_controller_1 = require("./pdf.controller");
const user_module_1 = require("../user/user.module");
const files_module_1 = require("../files/files.module");
let PdfModule = class PdfModule {
};
PdfModule = __decorate([
    (0, common_1.Module)({
        providers: [pdf_service_1.PdfService],
        controllers: [pdf_controller_1.PdfController],
        imports: [user_module_1.UserModule, files_module_1.FilesModule],
    })
], PdfModule);
exports.PdfModule = PdfModule;
//# sourceMappingURL=pdf.module.js.map