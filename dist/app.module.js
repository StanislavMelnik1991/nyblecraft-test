"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serve_static_1 = require("@nestjs/serve-static");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const files_module_1 = require("./files/files.module");
const pdf_module_1 = require("./pdf/pdf.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env' }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)(__dirname, 'static'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                logging: true,
                entities: [user_entity_1.User],
                synchronize: true,
            }),
            user_module_1.UserModule,
            files_module_1.FilesModule,
            pdf_module_1.PdfModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map