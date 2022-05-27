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
exports.AccountsApplicationService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const open_account_command_1 = require("../commands/open-account.command");
const open_account_response_dto_1 = require("../dtos/response/open-account-response.dto");
const open_account_validator_1 = require("../validators/open-account.validator");
const typescript_result_1 = require("typescript-result");
let AccountsApplicationService = class AccountsApplicationService {
    constructor(commandBus, openAccountValidator) {
        this.commandBus = commandBus;
        this.openAccountValidator = openAccountValidator;
    }
    async open(openAccountRequestDto) {
        const notification = await this.openAccountValidator.validate(openAccountRequestDto);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const openAccount = new open_account_command_1.OpenAccount(openAccountRequestDto.clientId, openAccountRequestDto.number);
        const accountId = await this.commandBus.execute(openAccount);
        const openAccountResponse = new open_account_response_dto_1.OpenAccountResponse(accountId, openAccount.number, 0, null, 1, null, null, openAccount.clientId);
        return typescript_result_1.Result.ok(openAccountResponse);
    }
};
AccountsApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        open_account_validator_1.OpenAccountValidator])
], AccountsApplicationService);
exports.AccountsApplicationService = AccountsApplicationService;
//# sourceMappingURL=accounts-application.service.js.map