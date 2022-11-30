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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_form_data_1 = require("nestjs-form-data");
const validation_pipe_1 = require("../pipes/validation.pipe");
const createUser_dto_1 = require("./dto/createUser.dto");
const deleteUser_dto_1 = require("./dto/deleteUser.dto");
const getUser_dto_1 = require("./dto/getUser.dto");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(dto) {
        const result = this.userService.getAllUsers(dto);
        return result;
    }
    getUser(id) {
        if (Number.isNaN(Number(id))) {
            throw new common_1.HttpException('param must be number', common_1.HttpStatus.BAD_REQUEST);
        }
        const result = this.userService.findOneUserById({ id: Number(id) });
        return result;
    }
    createUser(dto) {
        const user = this.userService.createUser(dto);
        return user;
    }
    updateUser(dto, id) {
        const user = this.userService.updateUser(dto, Number(id));
        return user;
    }
    deleteUser(dto) {
        const result = this.userService.deleteUser(dto);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user', type: user_entity_1.User }),
    (0, nestjs_form_data_1.FormDataRequest)(),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getUser_dto_1.GetAllUsersDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get user with {id}' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user', type: user_entity_1.User }),
    (0, nestjs_form_data_1.FormDataRequest)(),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user', type: user_entity_1.User }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, nestjs_form_data_1.FormDataRequest)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'user update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'user', type: user_entity_1.User }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, nestjs_form_data_1.FormDataRequest)(),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUser_dto_1.UpdateUserBodyDTO, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'delete user' }),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteUser_dto_1.DeleteUserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map