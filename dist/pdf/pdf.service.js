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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("../files/files.service");
const user_service_1 = require("../user/user.service");
let PdfService = class PdfService {
    constructor(userService, fileService) {
        this.userService = userService;
        this.fileService = fileService;
    }
    async generatePdf({ email }) {
        const user = await this.userService.findOneUserByEmail(email);
        const pdf = await this.fileService.createPDF({
            img: user.img,
            lastName: user.lastName,
            name: user.firstName,
        });
        user.pdf = pdf;
        user.save();
        return true;
    }
};
PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        files_service_1.FilesService])
], PdfService);
exports.PdfService = PdfService;
//# sourceMappingURL=pdf.service.js.map