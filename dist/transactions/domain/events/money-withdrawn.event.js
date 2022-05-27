"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyWithdrawn = void 0;
class MoneyWithdrawn {
    constructor(transactionId, accountIdFrom, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.accountIdFrom = accountIdFrom;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.MoneyWithdrawn = MoneyWithdrawn;
//# sourceMappingURL=money-withdrawn.event.js.map