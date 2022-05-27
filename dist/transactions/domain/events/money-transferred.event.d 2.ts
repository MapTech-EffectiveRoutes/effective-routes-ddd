import { TransactionStatus } from '../enums/transaction.status.enum';
import { DateTime } from '../../../common/domain/value-objects/date-time.value';
export declare class MoneyTransferred {
    readonly transactionId: number;
    accountIdFrom: number;
    accountIdTo: number;
    amount: number;
    status: TransactionStatus;
    createdAt: DateTime;
    constructor(transactionId: number, accountIdFrom: number, accountIdTo: number, amount: number, status: TransactionStatus, createdAt: DateTime);
}
