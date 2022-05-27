"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferMoney = void 0;
class TransferMoney {
    constructor(fromAccountNumber, toAccountNumber, amount, status, createdAt) {
        this.fromAccountNumber = fromAccountNumber;
        this.toAccountNumber = toAccountNumber;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.TransferMoney = TransferMoney;
//# sourceMappingURL=transfer-money.command.js.map