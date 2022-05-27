"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionFactory = void 0;
const transaction_entity_1 = require("../entities/transaction.entity");
class TransactionFactory {
    static createFrom(type, status, accountIdFrom, accountIdTo, amount, auditTrail) {
        return new transaction_entity_1.Transaction(type, status, accountIdFrom, accountIdTo, amount, auditTrail);
    }
}
exports.TransactionFactory = TransactionFactory;
//# sourceMappingURL=transaction.factory.js.map