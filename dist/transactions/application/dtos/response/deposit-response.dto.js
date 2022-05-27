"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositResponseDto = void 0;
class DepositResponseDto {
    constructor(transactionId, transactionType, accountNumber, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.DepositResponseDto = DepositResponseDto;
//# sourceMappingURL=deposit-response.dto.js.map