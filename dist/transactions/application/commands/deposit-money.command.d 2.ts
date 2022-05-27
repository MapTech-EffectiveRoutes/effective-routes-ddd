import { DateTime } from '../../../common/domain/value-objects/date-time.value';
import { TransactionStatus } from '../../domain/enums/transaction.status.enum';
export declare class DepositMoney {
    readonly accountNumber: string;
    readonly amount: number;
    readonly status: TransactionStatus;
    readonly createdAt: DateTime;
    constructor(accountNumber: string, amount: number, status: TransactionStatus, createdAt: DateTime);
}
