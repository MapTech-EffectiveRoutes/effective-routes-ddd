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
exports.DepositMoneyHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const deposit_money_command_1 = require("../../commands/deposit-money.command");
const account_typeorm_1 = require("../../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm");
const money_value_1 = require("../../../../common/domain/value-objects/money.value");
const currency_enum_1 = require("../../../../common/domain/enums/currency.enum");
const transaction_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/transaction.typeorm");
const transaction_factory_1 = require("../../../domain/factories/transaction.factory");
const transaction_type_enum_1 = require("../../../domain/enums/transaction-type.enum");
const transaction_status_enum_1 = require("../../../domain/enums/transaction.status.enum");
const account_id_value_1 = require("../../../../accounts/domain/value-objects/account-id.value");
const transaction_mapper_1 = require("../../mappers/transaction.mapper");
const transaction_id_value_1 = require("../../../domain/value-objects/transaction-id.value");
let DepositMoneyHandler = class DepositMoneyHandler {
    constructor(accountRepository, transactionRepository, publisher) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
        this.publisher = publisher;
    }
    async execute(command) {
        let transactionId = 0;
        const accountNumber = command.accountNumber.trim();
        const accountTypeORM = await this.accountRepository
            .createQueryBuilder()
            .setLock('pessimistic_write')
            .useTransaction(true)
            .where("number = :number")
            .setParameter("number", accountNumber)
            .getOne();
        if (accountTypeORM == null) {
            return transactionId;
        }
        const accountFromId = account_id_value_1.AccountId.of(accountTypeORM.id);
        const amount = money_value_1.Money.create(command.amount, currency_enum_1.Currency.SOLES);
        let transaction = transaction_factory_1.TransactionFactory.createFrom(transaction_type_enum_1.TransactionType.DEPOSIT, transaction_status_enum_1.TransactionStatus.STARTED, accountFromId, null, amount, null);
        let transactionTypeORM = transaction_mapper_1.TransactionMapper.toTypeORM(transaction);
        transactionTypeORM = await this.transactionRepository.save(transactionTypeORM);
        if (transactionTypeORM == null) {
            return transactionId;
        }
        transactionId = Number(transactionTypeORM.id);
        transaction.changeId(transaction_id_value_1.TransactionId.of(transactionId));
        transaction = this.publisher.mergeObjectContext(transaction);
        transaction.deposit();
        transaction.commit();
        return transactionId;
    }
};
DepositMoneyHandler = __decorate([
    (0, cqrs_1.CommandHandler)(deposit_money_command_1.DepositMoney),
    __param(0, (0, typeorm_1.InjectRepository)(account_typeorm_1.AccountTypeORM)),
    __param(1, (0, typeorm_1.InjectRepository)(transaction_typeorm_1.TransactionTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        cqrs_1.EventPublisher])
], DepositMoneyHandler);
exports.DepositMoneyHandler = DepositMoneyHandler;
//# sourceMappingURL=deposit-money.handler.js.map