"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTransferred = void 0;
class MoneyTransferred {
    constructor(transactionId, accountIdFrom, accountIdTo, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.accountIdFrom = accountIdFrom;
        this.accountIdTo = accountIdTo;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.MoneyTransferred = MoneyTransferred;
//# sourceMappingURL=money-transferred.event.js.map