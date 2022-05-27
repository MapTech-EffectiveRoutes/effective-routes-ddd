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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const api_controller_1 = require("../../common/api/api.controller");
const cqrs_1 = require("@nestjs/cqrs");
const transactions_application_service_1 = require("../application/services/transactions-application.service");
const deposit_request_dto_1 = require("../application/dtos/request/deposit-request.dto");
const withdraw_request_dto_1 = require("../application/dtos/request/withdraw-request.dto");
const transfer_request_dto_1 = require("../application/dtos/request/transfer-request.dto");
let TransactionsController = class TransactionsController {
    constructor(transactionsApplicationService, queryBus) {
        this.transactionsApplicationService = transactionsApplicationService;
        this.queryBus = queryBus;
    }
    async deposit(depositRequestDto, response) {
        try {
            const result = await this.transactionsApplicationService.deposit(depositRequestDto);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async withdraw(withdrawRequestDto, response) {
        try {
            const result = await this.transactionsApplicationService.withdraw(withdrawRequestDto);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
    async transfer(transferRequestDto, response) {
        try {
            const result = await this.transactionsApplicationService.transfer(transferRequestDto);
            if (result.isSuccess()) {
                return api_controller_1.ApiController.created(response, result.value);
            }
            return api_controller_1.ApiController.error(response, result.error.getErrors());
        }
        catch (error) {
            return api_controller_1.ApiController.serverError(response, error);
        }
    }
};
__decorate([
    (0, common_1.Post)('/deposit'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deposit_request_dto_1.DepositRequestDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "deposit", null);
__decorate([
    (0, common_1.Post)('/withdraw'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [withdraw_request_dto_1.WithdrawRequestDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)('/transfer'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_request_dto_1.TransferRequestDto, Object]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "transfer", null);
TransactionsController = __decorate([
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transactions_application_service_1.TransactionsApplicationService,
        cqrs_1.QueryBus])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map