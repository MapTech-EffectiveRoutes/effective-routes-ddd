"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawResponseDto = void 0;
class WithdrawResponseDto {
    constructor(transactionId, transactionType, accountNumber, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.WithdrawResponseDto = WithdrawResponseDto;
//# sourceMappingURL=withdraw-response.dto.js.map