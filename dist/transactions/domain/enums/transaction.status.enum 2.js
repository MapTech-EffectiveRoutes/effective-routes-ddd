"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatusLabel = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["STARTED"] = 1] = "STARTED";
    TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED";
    TransactionStatus[TransactionStatus["FAILED"] = 3] = "FAILED";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
exports.TransactionStatusLabel = new Map([
    [TransactionStatus.STARTED, 'STARTED'],
    [TransactionStatus.COMPLETED, 'COMPLETED'],
    [TransactionStatus.FAILED, 'FAILED'],
]);
//# sourceMappingURL=transaction.status.enum.js.map