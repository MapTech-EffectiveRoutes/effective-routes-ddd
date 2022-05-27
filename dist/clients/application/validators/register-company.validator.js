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
exports.RegisterCompanyValidator = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_notification_1 = require("../../../common/application/app.notification");
const typeorm_2 = require("typeorm");
const company_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/company.typeorm");
let RegisterCompanyValidator = class RegisterCompanyValidator {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async validate(registerCompanyRequest) {
        let notification = new app_notification_1.AppNotification();
        const name = registerCompanyRequest.name.trim();
        if (name.length <= 0) {
            notification.addError('name is required', null);
        }
        const ruc = registerCompanyRequest.ruc.trim();
        if (ruc.length <= 0) {
            notification.addError('ruc is required', null);
        }
        if (notification.hasErrors()) {
            return notification;
        }
        const customer = await this.companyRepository.createQueryBuilder().where("ruc = :ruc", { ruc }).getOne();
        if (customer != null) {
            notification.addError('ruc is taken', null);
        }
        return notification;
    }
};
RegisterCompanyValidator = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_typeorm_1.CompanyTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegisterCompanyValidator);
exports.RegisterCompanyValidator = RegisterCompanyValidator;
//# sourceMappingURL=register-company.validator.js.map