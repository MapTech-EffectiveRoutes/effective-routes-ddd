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
exports.OpenAccountHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const open_account_command_1 = require("../../commands/open-account.command");
const account_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/account.typeorm");
const account_number_value_1 = require("../../../domain/value-objects/account-number.value");
const money_value_1 = require("../../../../common/domain/value-objects/money.value");
const currency_enum_1 = require("../../../../common/domain/enums/currency.enum");
const account_factory_1 = require("../../../domain/factories/account.factory");
const account_mapper_1 = require("../../mappers/account.mapper");
const client_id_value_1 = require("../../../../clients/domain/value-objects/client-id.value");
const account_id_value_1 = require("../../../domain/value-objects/account-id.value");
let OpenAccountHandler = class OpenAccountHandler {
    constructor(accountRepository, publisher) {
        this.accountRepository = accountRepository;
        this.publisher = publisher;
    }
    async execute(command) {
        let accountId = 0;
        const accountNumberResult = account_number_value_1.AccountNumber.create(command.number);
        if (accountNumberResult.isFailure()) {
            return accountId;
        }
        const balance = money_value_1.Money.create(0, currency_enum_1.Currency.SOLES);
        const clientId = client_id_value_1.ClientId.of(command.clientId);
        let account = account_factory_1.AccountFactory.createFrom(accountNumberResult.value, balance, clientId, null);
        let accountTypeORM = account_mapper_1.AccountMapper.toTypeORM(account);
        accountTypeORM = await this.accountRepository.save(accountTypeORM);
        if (accountTypeORM == null) {
            return accountId;
        }
        accountId = Number(accountTypeORM.id);
        account.changeId(account_id_value_1.AccountId.of(accountId));
        account = this.publisher.mergeObjectContext(account);
        account.open();
        account.commit();
        return accountId;
    }
};
OpenAccountHandler = __decorate([
    (0, cqrs_1.CommandHandler)(open_account_command_1.OpenAccount),
    __param(0, (0, typeorm_1.InjectRepository)(account_typeorm_1.AccountTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cqrs_1.EventPublisher])
], OpenAccountHandler);
exports.OpenAccountHandler = OpenAccountHandler;
//# sourceMappingURL=open-account.handler.js.map