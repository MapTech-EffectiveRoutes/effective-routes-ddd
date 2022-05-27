import { TransactionStatus } from '../enums/transaction.status.enum';
import { DateTime } from '../../../common/domain/value-objects/date-time.value';
export declare class MoneyWithdrawn {
    readonly transactionId: number;
    readonly accountIdFrom: number;
    readonly amount: number;
    readonly status: TransactionStatus;
    readonly createdAt: DateTime;
    constructor(transactionId: number, accountIdFrom: number, amount: number, status: TransactionStatus, createdAt: DateTime);
}
