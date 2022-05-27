"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = exports.QueryHandlers = exports.EventHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const account_typeorm_1 = require("./infrastructure/persistence/typeorm/entities/account.typeorm");
const typeorm_1 = require("@nestjs/typeorm");
const accounts_controller_1 = require("./api/accounts.controller");
const accout_opened_handler_1 = require("./application/handlers/events/accout-opened.handler");
const accounts_application_service_1 = require("./application/services/accounts-application.service");
const open_account_validator_1 = require("./application/validators/open-account.validator");
const get_accounts_handler_1 = require("./application/handlers/queries/get-accounts.handler");
const get_account_by_id_handler_1 = require("./application/handlers/queries/get-account-by-id.handler");
const money_deposited_handler_1 = require("./application/handlers/events/money-deposited.handler");
const open_account_handler_1 = require("./application/handlers/commands/open-account.handler");
const money_withdrawn_handler_1 = require("./application/handlers/events/money-withdrawn.handler");
const money_transferred_handler_1 = require("./application/handlers/events/money-transferred.handler");
exports.CommandHandlers = [open_account_handler_1.OpenAccountHandler];
exports.EventHandlers = [accout_opened_handler_1.AccountOpenedHandler, money_deposited_handler_1.MoneyDepositedHandler, money_withdrawn_handler_1.MoneyWithdrawnHandler, money_transferred_handler_1.MoneyTransferredHandler];
exports.QueryHandlers = [get_accounts_handler_1.GetAccountsHandler, get_account_by_id_handler_1.GetAccountByIdHandler];
let AccountsModule = class AccountsModule {
};
AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([account_typeorm_1.AccountTypeORM]),
        ],
        controllers: [accounts_controller_1.AccountsController],
        providers: [
            accounts_application_service_1.AccountsApplicationService,
            open_account_validator_1.OpenAccountValidator,
            ...exports.CommandHandlers,
            ...exports.EventHandlers,
            ...exports.QueryHandlers
        ]
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map