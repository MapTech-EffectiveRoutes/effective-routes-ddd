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
exports.TransactionsApplicationService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typescript_result_1 = require("typescript-result");
const deposit_money_validator_1 = require("../validators/deposit-money.validator");
const transfer_money_validator_1 = require("../validators/transfer-money.validator");
const withdraw_money_validator_1 = require("../validators/withdraw-money.validator");
const deposit_money_command_1 = require("../commands/deposit-money.command");
const date_time_value_1 = require("../../../common/domain/value-objects/date-time.value");
const transaction_status_enum_1 = require("../../domain/enums/transaction.status.enum");
const deposit_response_dto_1 = require("../dtos/response/deposit-response.dto");
const withdraw_money_command_1 = require("../commands/withdraw-money.command");
const withdraw_response_dto_1 = require("../dtos/response/withdraw-response.dto");
const transfer_money_command_1 = require("../commands/transfer-money.command");
const transfer_response_dto_1 = require("../dtos/response/transfer-response.dto");
const transaction_type_enum_1 = require("../../domain/enums/transaction-type.enum");
let TransactionsApplicationService = class TransactionsApplicationService {
    constructor(commandBus, depositValidator, withdrawValidator, transferValidator) {
        this.commandBus = commandBus;
        this.depositValidator = depositValidator;
        this.withdrawValidator = withdrawValidator;
        this.transferValidator = transferValidator;
    }
    async deposit(depositRequestDto) {
        const notification = await this.depositValidator.validate(depositRequestDto);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const depositMoney = new deposit_money_command_1.DepositMoney(depositRequestDto.accountNumber, depositRequestDto.amount, transaction_status_enum_1.TransactionStatus.STARTED, date_time_value_1.DateTime.utcNow());
        const transactionId = await this.commandBus.execute(depositMoney);
        const depositResponseDto = new deposit_response_dto_1.DepositResponseDto(transactionId, transaction_type_enum_1.TransactionType.DEPOSIT, depositRequestDto.accountNumber, depositRequestDto.amount, transaction_status_enum_1.TransactionStatusLabel.get(transaction_status_enum_1.TransactionStatus.STARTED), null);
        return typescript_result_1.Result.ok(depositResponseDto);
    }
    async withdraw(withdrawRequestDto) {
        const notification = await this.withdrawValidator.validate(withdrawRequestDto);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const withdrawCommand = new withdraw_money_command_1.WithdrawMoney(withdrawRequestDto.accountNumber, withdrawRequestDto.amount, transaction_status_enum_1.TransactionStatus.STARTED, date_time_value_1.DateTime.utcNow());
        const transactionId = await this.commandBus.execute(withdrawCommand);
        const withdrawResponseDto = new withdraw_response_dto_1.WithdrawResponseDto(transactionId, transaction_type_enum_1.TransactionType.WITHDRAW, withdrawRequestDto.accountNumber, withdrawRequestDto.amount, transaction_status_enum_1.TransactionStatusLabel.get(transaction_status_enum_1.TransactionStatus.STARTED), null);
        return typescript_result_1.Result.ok(withdrawResponseDto);
    }
    async transfer(transferRequestDto) {
        const notification = await this.transferValidator.validate(transferRequestDto);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const transferMoney = new transfer_money_command_1.TransferMoney(transferRequestDto.fromAccountNumber, transferRequestDto.toAccountNumber, transferRequestDto.amount, transaction_status_enum_1.TransactionStatus.STARTED, date_time_value_1.DateTime.utcNow());
        const transactionId = await this.commandBus.execute(transferMoney);
        const transferResponseDto = new transfer_response_dto_1.TransferResponseDto(transactionId, transaction_type_enum_1.TransactionType.TRANSFER, transferRequestDto.fromAccountNumber, transferRequestDto.toAccountNumber, transferRequestDto.amount, transaction_status_enum_1.TransactionStatusLabel.get(transaction_status_enum_1.TransactionStatus.STARTED), null);
        return typescript_result_1.Result.ok(transferResponseDto);
    }
};
TransactionsApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        deposit_money_validator_1.DepositMoneyValidator,
        withdraw_money_validator_1.WithdrawMoneyValidator,
        transfer_money_validator_1.TransferMoneyValidator])
], TransactionsApplicationService);
exports.TransactionsApplicationService = TransactionsApplicationService;
//# sourceMappingURL=transactions-application.service.js.map