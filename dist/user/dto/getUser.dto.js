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
exports.GetAllUsersDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class GetAllUsersDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({ example: '10', description: 'limit users' }),
    (0, class_validator_1.IsNumber)({ allowInfinity: false, allowNaN: false }, { message: 'must be number' }),
    __metadata("design:type", Number)
], GetAllUsersDTO.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({ example: '10', description: 'limit users' }),
    (0, class_validator_1.IsNumber)({ allowInfinity: false, allowNaN: false }, { message: 'must be number' }),
    __metadata("design:type", Number)
], GetAllUsersDTO.prototype, "offset", void 0);
exports.GetAllUsersDTO = GetAllUsersDTO;
//# sourceMappingURL=getUser.dto.js.map