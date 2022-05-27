import { AccountNumberTypeORM } from '../value-objects/account-number.typeorm';
import { BalanceTypeORM } from '../value-objects/balance.typeorm';
import { CustomerIdTypeORM } from '../value-objects/customer-id.typeorm';
import { AuditTrailTypeORM } from '../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm';
export declare class AccountTypeORM {
    id: number;
    number: AccountNumberTypeORM;
    balance: BalanceTypeORM;
    clientId: CustomerIdTypeORM;
    auditTrail: AuditTrailTypeORM;
}
