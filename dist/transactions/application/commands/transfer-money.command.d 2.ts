import { TransactionStatus } from '../../domain/enums/transaction.status.enum';
import { DateTime } from '../../../common/domain/value-objects/date-time.value';
export declare class TransferMoney {
    fromAccountNumber: string;
    toAccountNumber: string;
    amount: number;
    status: TransactionStatus;
    createdAt: DateTime;
    constructor(fromAccountNumber: string, toAccountNumber: string, amount: number, status: TransactionStatus, createdAt: DateTime);
}
