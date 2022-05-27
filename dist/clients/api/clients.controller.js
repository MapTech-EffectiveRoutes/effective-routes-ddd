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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const register_person_request_dto_1 = require("../application/dtos/request/register-person-request.dto");
const company_application_service_1 = require("../application/services/company-application.service");
const api_controller_1 = require("../../common/api/api.controller");
const cqrs_1 = require("@nestjs/cqrs");
const get_customers_person_query_1 = require("../application/queries/get-customers-person.query");
const person_application_service_1 = require("../application/services/person-application.service");
const register_company_request_dto_1 = require("../application/dtos/request/register-company-request.dto");
const get_customers_company_query_1 = require("../application/queries/get-customers-company.query");
let ClientsController = class ClientsController {
    constructor(personApplicationService, companyApplicationService, queryBus) {
        this.personApplicationService = personApplicationService;
        this.companyApplicationService = companyApplicationService;
        this.queryBus = queryBus;
    }
    async registerPerson(registerPersonRequest, response) {
        try {
            const result = await this.personApplicationService.register(registerPersonRequest);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async registerCompany(registerCompanyRequest, response) {
        try {
            const result = await this.companyApplicationService.register(registerCompanyRequest);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async getCustomersPerson(response) {
        try {
            const customers = await this.queryBus.execute(new get_customers_person_query_1.GetCustomersPersonQuery());
            return api_controller_1.ApiController.ok(response, customers);
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async getCustomersCompany(response) {
        try {
            const customers = await this.queryBus.execute(new get_customers_company_query_1.GetCustomersCompanyQuery());
            return api_controller_1.ApiController.ok(response, customers);
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
};
__decorate([
    (0, common_1.Post)('/person'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_person_request_dto_1.RegisterPersonRequest, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "registerPerson", null);
__decorate([
    (0, common_1.Post)('/company'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_company_request_dto_1.RegisterCompanyRequest, Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "registerCompany", null);
__decorate([
    (0, common_1.Get)('/person'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getCustomersPerson", null);
__decorate([
    (0, common_1.Get)('/company'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "getCustomersCompany", null);
ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    __metadata("design:paramtypes", [person_application_service_1.PersonApplicationService,
        company_application_service_1.CompanyApplicationService,
        cqrs_1.QueryBus])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=clients.controller.js.map