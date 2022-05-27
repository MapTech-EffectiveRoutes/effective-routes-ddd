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
exports.MoneyDepositedHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
const money_deposited_event_1 = require("../../../../transactions/domain/events/money-deposited.event");
const typeorm_1 = require("@nestjs/typeorm");
const account_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/account.typeorm");
const typeorm_2 = require("typeorm");
const account_mapper_1 = require("../../mappers/account.mapper");
const account_number_value_1 = require("../../../domain/value-objects/account-number.value");
const account_factory_1 = require("../../../domain/factories/account.factory");
const money_value_1 = require("../../../../common/domain/value-objects/money.value");
const currency_enum_1 = require("../../../../common/domain/enums/currency.enum");
const client_id_value_1 = require("../../../../clients/domain/value-objects/client-id.value");
const account_id_value_1 = require("../../../domain/value-objects/account-id.value");
const complete_transaction_command_1 = require("../../../../transactions/application/commands/complete-transaction.command");
let MoneyDepositedHandler = class MoneyDepositedHandler {
    constructor(accountRepository, commandBus) {
        this.accountRepository = accountRepository;
        this.commandBus = commandBus;
    }
    async handle(event) {
        let accountTypeORM = await this.accountRepository
            .createQueryBuilder()
            .where("id = :id")
            .setParameter("id", Number(event.accountIdFrom))
            .getOne();
        if (accountTypeORM == null) {
            console.log('MoneyDeposited accountTypeORM not found');
            return;
        }
        const accountNumberResult = account_number_value_1.AccountNumber.create(accountTypeORM.number.value);
        if (accountNumberResult.isFailure()) {
            return;
        }
        const accountAmount = money_value_1.Money.create(accountTypeORM.balance.balance, accountTypeORM.balance.currency);
        let account = account_factory_1.AccountFactory.withId(account_id_value_1.AccountId.of(accountTypeORM.id), accountNumberResult.value, accountAmount, client_id_value_1.ClientId.of(accountTypeORM.clientId.value), null);
        const depositAmount = money_value_1.Money.create(event.amount, currency_enum_1.Currency.SOLES);
        const depositResult = account.deposit(depositAmount);
        if (depositResult.isFailure()) {
            console.log('MoneyDeposited error');
            return;
        }
        accountTypeORM = account_mapper_1.AccountMapper.toTypeORM(account);
        await (0, typeorm_2.getManager)().transaction(async (transactionalEntityManager) => {
            accountTypeORM = await this.accountRepository.save(accountTypeORM);
            if (accountTypeORM == null) {
                console.log('MoneyDeposited error');
                return;
            }
            const completeTransaction = new complete_transaction_command_1.CompleteTransaction(event.transactionId);
            await this.commandBus.execute(completeTransaction);
        });
    }
};
MoneyDepositedHandler = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(money_deposited_event_1.MoneyDeposited),
    __param(0, (0, typeorm_1.InjectRepository)(account_typeorm_1.AccountTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cqrs_1.CommandBus])
], MoneyDepositedHandler);
exports.MoneyDepositedHandler = MoneyDepositedHandler;
//# sourceMappingURL=money-deposited.handler.js.map