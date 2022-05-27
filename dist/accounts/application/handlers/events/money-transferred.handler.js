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
exports.MoneyTransferredHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
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
const money_transferred_event_1 = require("../../../../transactions/domain/events/money-transferred.event");
const complete_transaction_command_1 = require("../../../../transactions/application/commands/complete-transaction.command");
let MoneyTransferredHandler = class MoneyTransferredHandler {
    constructor(accountRepository, commandBus) {
        this.accountRepository = accountRepository;
        this.commandBus = commandBus;
    }
    async handle(event) {
        console.log('Accounts BC - handle MoneyTransferred');
        let fromAccountTypeORM = await this.accountRepository
            .createQueryBuilder()
            .where("id = :id")
            .setParameter("id", Number(event.accountIdFrom))
            .getOne();
        if (fromAccountTypeORM == null) {
            console.log('MoneyTransferred fromAccountTypeORM not found');
            return;
        }
        let toAccountTypeORM = await this.accountRepository
            .createQueryBuilder()
            .where("id = :id")
            .setParameter("id", Number(event.accountIdTo))
            .getOne();
        if (toAccountTypeORM == null) {
            console.log('MoneyTransferred toAccountTypeORM not found');
            return;
        }
        const fromAccountNumberResult = account_number_value_1.AccountNumber.create(fromAccountTypeORM.number.value);
        if (fromAccountNumberResult.isFailure()) {
            return;
        }
        const toAccountNumberResult = account_number_value_1.AccountNumber.create(toAccountTypeORM.number.value);
        if (toAccountNumberResult.isFailure()) {
            return;
        }
        const fromAccountAmount = money_value_1.Money.create(fromAccountTypeORM.balance.balance, fromAccountTypeORM.balance.currency);
        let fromAccount = account_factory_1.AccountFactory.withId(account_id_value_1.AccountId.of(fromAccountTypeORM.id), fromAccountNumberResult.value, fromAccountAmount, client_id_value_1.ClientId.of(fromAccountTypeORM.clientId.value), null);
        const toAccountAmount = money_value_1.Money.create(toAccountTypeORM.balance.balance, toAccountTypeORM.balance.currency);
        let toAccount = account_factory_1.AccountFactory.withId(account_id_value_1.AccountId.of(toAccountTypeORM.id), toAccountNumberResult.value, toAccountAmount, client_id_value_1.ClientId.of(toAccountTypeORM.clientId.value), null);
        const transferAmount = money_value_1.Money.create(event.amount, currency_enum_1.Currency.SOLES);
        const withdrawResult = fromAccount.withdraw(transferAmount);
        const depositResult = toAccount.deposit(transferAmount);
        if (withdrawResult.isFailure() || depositResult.isFailure()) {
            console.log('MoneyTransferred error');
            return;
        }
        fromAccountTypeORM = account_mapper_1.AccountMapper.toTypeORM(fromAccount);
        toAccountTypeORM = account_mapper_1.AccountMapper.toTypeORM(toAccount);
        await (0, typeorm_2.getManager)().transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save(fromAccountTypeORM);
            await transactionalEntityManager.save(toAccountTypeORM);
            if (fromAccountTypeORM == null || toAccountTypeORM == null) {
                console.log('MoneyTransferred error');
                return;
            }
            const completeTransaction = new complete_transaction_command_1.CompleteTransaction(event.transactionId);
            await this.commandBus.execute(completeTransaction);
        });
    }
};
MoneyTransferredHandler = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(money_transferred_event_1.MoneyTransferred),
    __param(0, (0, typeorm_1.InjectRepository)(account_typeorm_1.AccountTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cqrs_1.CommandBus])
], MoneyTransferredHandler);
exports.MoneyTransferredHandler = MoneyTransferredHandler;
//# sourceMappingURL=money-transferred.handler.js.map