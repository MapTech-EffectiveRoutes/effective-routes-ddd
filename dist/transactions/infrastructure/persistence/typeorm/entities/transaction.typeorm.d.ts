import { AccountIdFromTypeORM } from '../value-objects/account-id-from.typeorm';
import { AccountIdToTypeORM } from '../value-objects/account-id-to.typeorm';
import { AmountTypeORM } from '../value-objects/amount.typeorm';
import { AuditTrailTypeORM } from '../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm';
import { TransactionStatus } from '../../../../domain/enums/transaction.status.enum';
export declare class TransactionTypeORM {
    id: number;
    type: string;
    accountIdFrom: AccountIdFromTypeORM;
    accountIdTo: AccountIdToTypeORM;
    amount: AmountTypeORM;
    status: TransactionStatus;
    auditTrail: AuditTrailTypeORM;
}
