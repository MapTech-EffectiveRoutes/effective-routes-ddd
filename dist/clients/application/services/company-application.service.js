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
exports.CompanyApplicationService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typescript_result_1 = require("typescript-result");
const register_company_validator_1 = require("../validators/register-company.validator");
const register_company_command_1 = require("../commands/register-company.command");
const register_company_response_dto_1 = require("../dtos/response/register-company-response.dto");
const date_time_value_1 = require("../../../common/domain/value-objects/date-time.value");
const app_settings_1 = require("../../../common/application/app-settings");
let CompanyApplicationService = class CompanyApplicationService {
    constructor(commandBus, registerCompanyValidator) {
        this.commandBus = commandBus;
        this.registerCompanyValidator = registerCompanyValidator;
    }
    async register(registerCompanyRequest) {
        const notification = await this.registerCompanyValidator.validate(registerCompanyRequest);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const createdAt = date_time_value_1.DateTime.utcNow().format();
        const createdBy = app_settings_1.AppSettings.SUPER_ADMIN;
        const updatedAt = null;
        const updatedBy = null;
        const registerCompany = new register_company_command_1.RegisterCompany(registerCompanyRequest.name, registerCompanyRequest.ruc, createdAt, createdBy, updatedAt, updatedBy);
        const clientId = await this.commandBus.execute(registerCompany);
        const registerCompanyResponse = new register_company_response_dto_1.RegisterCompanyResponse(clientId, registerCompanyRequest.name, registerCompanyRequest.ruc);
        return typescript_result_1.Result.ok(registerCompanyResponse);
    }
};
CompanyApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        register_company_validator_1.RegisterCompanyValidator])
], CompanyApplicationService);
exports.CompanyApplicationService = CompanyApplicationService;
//# sourceMappingURL=company-application.service.js.map