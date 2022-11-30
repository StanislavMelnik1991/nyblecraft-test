"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("../pipes/validation.pipe");
const user_entity_1 = require("../user/user.entity");
const createPdf_dto_1 = require("./dto/createPdf.dto");
const pdf_service_1 = require("./pdf.service");
let PdfController = class PdfController {
    constructor(pdfService) {
        this.pdfService = pdfService;
    }
    createPdf(dto) {
        const result = this.pdfService.generatePdf(dto);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create pdf for user with {id}' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user', type: user_entity_1.User }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPdf_dto_1.CreatePdfDTO]),
    __metadata("design:returntype", void 0)
], PdfController.prototype, "createPdf", null);
PdfController = __decorate([
    (0, swagger_1.ApiTags)('Pdf'),
    (0, common_1.Controller)('api/pdf'),
    __metadata("design:paramtypes", [pdf_service_1.PdfService])
], PdfController);
exports.PdfController = PdfController;
//# sourceMappingURL=pdf.controller.js.map