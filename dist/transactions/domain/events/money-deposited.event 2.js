"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyDeposited = void 0;
class MoneyDeposited {
    constructor(transactionId, accountIdFrom, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.accountIdFrom = accountIdFrom;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.MoneyDeposited = MoneyDeposited;
//# sourceMappingURL=money-deposited.event.js.map