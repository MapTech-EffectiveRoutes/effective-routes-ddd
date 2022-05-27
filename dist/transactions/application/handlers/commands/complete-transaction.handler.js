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
exports.CompleteTransactionHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/transaction.typeorm");
const transaction_status_enum_1 = require("../../../domain/enums/transaction.status.enum");
const complete_transaction_command_1 = require("../../commands/complete-transaction.command");
let CompleteTransactionHandler = class CompleteTransactionHandler {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    async execute(command) {
        const transactionId = command.transactionId;
        let transactionTypeORM = await this.transactionRepository
            .createQueryBuilder()
            .where("id = :id")
            .setParameter("id", transactionId)
            .getOne();
        if (transactionTypeORM == null) {
            return false;
        }
        transactionTypeORM.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
        transactionTypeORM = await this.transactionRepository.save(transactionTypeORM);
        if (transactionTypeORM == null) {
            return false;
        }
        return true;
    }
};
CompleteTransactionHandler = __decorate([
    (0, cqrs_1.CommandHandler)(complete_transaction_command_1.CompleteTransaction),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_typeorm_1.TransactionTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompleteTransactionHandler);
exports.CompleteTransactionHandler = CompleteTransactionHandler;
//# sourceMappingURL=complete-transaction.handler.js.map