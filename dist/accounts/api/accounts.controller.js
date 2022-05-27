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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const open_account_request_dto_1 = require("../application/dtos/request/open-account-request.dto");
const accounts_application_service_1 = require("../application/services/accounts-application.service");
const api_controller_1 = require("../../common/api/api.controller");
const cqrs_1 = require("@nestjs/cqrs");
const get_account_by_id_query_1 = require("../application/queries/get-account-by-id.query");
const get_accounts_query_1 = require("../application/queries/get-accounts.query");
let AccountsController = class AccountsController {
    constructor(accountsApplicationService, queryBus) {
        this.accountsApplicationService = accountsApplicationService;
        this.queryBus = queryBus;
    }
    async open(openAccountRequest, response) {
        try {
            const result = await this.accountsApplicationService.open(openAccountRequest);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async getAccounts(response) {
        try {
            const customers = await this.queryBus.execute(new get_accounts_query_1.GetAccountsQuery());
            return api_controller_1.ApiController.ok(response, customers);
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async getById(accountId, response) {
        try {
            const customers = await this.queryBus.execute(new get_account_by_id_query_1.GetAccountByIdQuery(accountId));
            return api_controller_1.ApiController.ok(response, customers);
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [open_account_request_dto_1.OpenAccountRequest, Object]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "open", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getAccounts", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getById", null);
AccountsController = __decorate([
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [accounts_application_service_1.AccountsApplicationService,
        cqrs_1.QueryBus])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map