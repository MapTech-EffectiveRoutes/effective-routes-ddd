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
exports.RegisterCompanyHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const register_company_command_1 = require("../../commands/register-company.command");
const typeorm_2 = require("typeorm");
const client_id_value_1 = require("../../../domain/value-objects/client-id.value");
const ruc_value_1 = require("../../../domain/value-objects/ruc.value");
const company_mapper_1 = require("../../mappers/company.mapper");
const company_name_value_1 = require("../../../../common/domain/value-objects/company-name.value");
const company_factory_1 = require("../../../domain/factories/company.factory");
const company_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/company.typeorm");
const audit_trail_value_1 = require("../../../../common/domain/value-objects/audit-trail.value");
const date_time_value_1 = require("../../../../common/domain/value-objects/date-time.value");
const user_id_value_1 = require("../../../../users/domain/value-objects/user-id.value");
let RegisterCompanyHandler = class RegisterCompanyHandler {
    constructor(companyRepository, publisher) {
        this.companyRepository = companyRepository;
        this.publisher = publisher;
    }
    async execute(command) {
        let clientId = 0;
        const companyNameResult = company_name_value_1.CompanyName.create(command.name);
        if (companyNameResult.isFailure()) {
            return clientId;
        }
        const rucResult = ruc_value_1.Ruc.create(command.ruc);
        if (rucResult.isFailure()) {
            return clientId;
        }
        const auditTrail = audit_trail_value_1.AuditTrail.from(command.createdAt != null ? date_time_value_1.DateTime.fromString(command.createdAt) : null, command.createdBy != null ? user_id_value_1.UserId.of(command.createdBy) : null, command.updatedAt != null ? date_time_value_1.DateTime.fromString(command.updatedAt) : null, command.updatedBy != null ? user_id_value_1.UserId.of(command.updatedBy) : null);
        let company = company_factory_1.CompanyFactory.createFrom(companyNameResult.value, rucResult.value, auditTrail);
        let companyTypeORM = company_mapper_1.CompanyMapper.toTypeORM(company);
        companyTypeORM = await this.companyRepository.save(companyTypeORM);
        if (companyTypeORM == null) {
            return clientId;
        }
        clientId = Number(companyTypeORM.id);
        company.changeId(client_id_value_1.ClientId.of(clientId));
        company = this.publisher.mergeObjectContext(company);
        company.register();
        company.commit();
        return clientId;
    }
};
RegisterCompanyHandler = __decorate([
    (0, cqrs_1.CommandHandler)(register_company_command_1.RegisterCompany),
    __param(0, (0, typeorm_1.InjectRepository)(company_typeorm_1.CompanyTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cqrs_1.EventPublisher])
], RegisterCompanyHandler);
exports.RegisterCompanyHandler = RegisterCompanyHandler;
//# sourceMappingURL=register-company.handler.js.map