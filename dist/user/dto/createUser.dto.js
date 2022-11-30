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
exports.CreateUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const nestjs_form_data_1 = require("nestjs-form-data");
class CreateUserDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'user name' }),
    (0, class_validator_1.IsString)({ message: 'name mast be string' }),
    (0, class_validator_1.Length)(2, 16, { message: 'name mast be 2 to 16 characters' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'Smith', description: 'user last name' }),
    (0, class_validator_1.IsString)({ message: 'name mast be string' }),
    (0, class_validator_1.Length)(2, 16, { message: 'name mast be 2 to 16 characters' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'JohnSmith@mail.com', description: 'user email' }),
    (0, class_validator_1.IsString)({ message: 'email mast be string' }),
    (0, class_validator_1.IsEmail)({ message: 'incorrect email' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, nestjs_form_data_1.IsFile)(),
    (0, nestjs_form_data_1.MaxFileSize)(1e6),
    (0, nestjs_form_data_1.HasMimeType)(['image/jpeg', 'image/png']),
    (0, swagger_1.ApiProperty)({ description: 'user image' }),
    __metadata("design:type", nestjs_form_data_1.MemoryStoredFile)
], CreateUserDTO.prototype, "img", void 0);
exports.CreateUserDTO = CreateUserDTO;
//# sourceMappingURL=createUser.dto.js.map