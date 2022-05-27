"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferResponseDto = void 0;
class TransferResponseDto {
    constructor(transactionId, transactionType, fromAccountNumber, toAccountNumber, amount, status, createdAt) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.fromAccountNumber = fromAccountNumber;
        this.toAccountNumber = toAccountNumber;
        this.amount = amount;
        this.status = status;
        this.createdAt = createdAt;
    }
}
exports.TransferResponseDto = TransferResponseDto;
//# sourceMappingURL=transfer-response.dto.js.map