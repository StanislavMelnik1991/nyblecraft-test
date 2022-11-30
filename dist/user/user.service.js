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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const files_service_1 = require("../files/files.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(usersRepository, fileService) {
        this.usersRepository = usersRepository;
        this.fileService = fileService;
    }
    async createUser({ email, firstName, lastName, img }) {
        const savedImage = await this.fileService.createImage(img);
        let user = this.usersRepository.create({
            email,
            firstName,
            lastName,
            img: savedImage,
        });
        user = await this.usersRepository.save(user);
        return user;
    }
    async getAllUsers({ limit, offset }) {
        const [users, count] = await this.usersRepository.findAndCount({
            take: limit,
            skip: offset,
            select: { id: true, firstName: true, lastName: true },
        });
        return { users, count };
    }
    async findOneUserById({ id }) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findOneUserByEmail(email) {
        const user = await this.usersRepository.findOneBy({ email });
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async deleteUser({ email }) {
        const user = await this.usersRepository.findOneBy({ email: email });
        if (!user) {
            throw new common_1.HttpException('user not found', common_1.HttpStatus.NOT_FOUND);
        }
        this.fileService.deleteImage(user.img);
        user.remove();
        return 'ok';
    }
    async updateUser({ email, firstName, img, lastName }, id) {
        const user = await this.findOneUserById({ id });
        if (firstName) {
            user.firstName = firstName;
        }
        if (email) {
            user.email = email;
        }
        if (img) {
            console.log(user.img);
            await this.fileService.deleteImage(user.img);
            const savedImage = await this.fileService.createImage(img);
            console.log(savedImage);
            user.img = savedImage;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        user.save();
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map