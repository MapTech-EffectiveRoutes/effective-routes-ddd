"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = exports.QueryHandlers = exports.EventHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const deposit_money_handler_1 = require("./application/handlers/commands/deposit-money.handler");
const transactions_application_service_1 = require("./application/services/transactions-application.service");
const transactions_controller_1 = require("./api/transactions.controller");
const deposit_money_validator_1 = require("./application/validators/deposit-money.validator");
const withdraw_money_validator_1 = require("./application/validators/withdraw-money.validator");
const transfer_money_validator_1 = require("./application/validators/transfer-money.validator");
const withdraw_money_handler_1 = require("./application/handlers/commands/withdraw-money.handler");
const transfer_money_handler_1 = require("./application/handlers/commands/transfer-money.handler");
const transaction_typeorm_1 = require("./infrastructure/persistence/typeorm/entities/transaction.typeorm");
const account_typeorm_1 = require("../accounts/infrastructure/persistence/typeorm/entities/account.typeorm");
const money_transferred_handler_1 = require("./application/handlers/events/money-transferred.handler");
const complete_transaction_handler_1 = require("./application/handlers/commands/complete-transaction.handler");
exports.CommandHandlers = [deposit_money_handler_1.DepositMoneyHandler, withdraw_money_handler_1.WithdrawMoneyHandler, transfer_money_handler_1.TransferMoneyHandler, complete_transaction_handler_1.CompleteTransactionHandler];
exports.EventHandlers = [money_transferred_handler_1.MoneyTransferredHandler];
exports.QueryHandlers = [];
let TransactionsModule = class TransactionsModule {
};
TransactionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([transaction_typeorm_1.TransactionTypeORM, account_typeorm_1.AccountTypeORM]),
        ],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [
            transactions_application_service_1.TransactionsApplicationService,
            deposit_money_validator_1.DepositMoneyValidator,
            withdraw_money_validator_1.WithdrawMoneyValidator,
            transfer_money_validator_1.TransferMoneyValidator,
            ...exports.CommandHandlers,
            ...exports.EventHandlers,
            ...exports.QueryHandlers
        ]
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map