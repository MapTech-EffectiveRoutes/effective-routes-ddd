"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionMapper = void 0;
const transaction_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/transaction.typeorm");
const account_id_from_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/account-id-from.typeorm");
const amount_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/amount.typeorm");
class TransactionMapper {
    static toTypeORM(transaction) {
        const transactionTypeORM = new transaction_typeorm_1.TransactionTypeORM();
        transactionTypeORM.type = transaction.getType();
        transactionTypeORM.status = transaction.getStatus();
        transactionTypeORM.accountIdFrom = account_id_from_typeorm_1.AccountIdFromTypeORM.from(transaction.getAccountFrom().getValue());
        transactionTypeORM.accountIdTo = transaction.getAccountTo() != null ? account_id_from_typeorm_1.AccountIdFromTypeORM.from(transaction.getAccountTo().getValue()) : null;
        transactionTypeORM.amount = amount_typeorm_1.AmountTypeORM.from(transaction.getAmount().getAmount(), transaction.getAmount().getCurrency());
        return transactionTypeORM;
    }
}
exports.TransactionMapper = TransactionMapper;
//# sourceMappingURL=transaction.mapper.js.map