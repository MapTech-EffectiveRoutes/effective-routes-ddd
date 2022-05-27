"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypeLabel = exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "D";
    TransactionType["WITHDRAW"] = "W";
    TransactionType["TRANSFER"] = "T";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
exports.TransactionTypeLabel = new Map([
    [TransactionType.DEPOSIT, 'DEPOSIT'],
    [TransactionType.WITHDRAW, 'WITHDRAW'],
    [TransactionType.TRANSFER, 'TRANSFER'],
]);
//# sourceMappingURL=transaction-type.enum.js.map