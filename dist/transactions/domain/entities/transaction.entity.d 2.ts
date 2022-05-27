import { Money } from '../../../common/domain/value-objects/money.value';
import { AggregateRoot } from '@nestjs/cqrs';
import { TransactionId } from '../value-objects/transaction-id.value';
import { AccountId } from '../../../accounts/domain/value-objects/account-id.value';
import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { TransactionType } from '../enums/transaction-type.enum';
import { TransactionStatus } from '../enums/transaction.status.enum';
export declare class Transaction extends AggregateRoot {
    private id;
    private readonly type;
    private readonly status;
    private readonly accountFrom;
    private readonly accountTo;
    private readonly amount;
    private readonly auditTrail;
    constructor(type: TransactionType, status: TransactionStatus, accountFrom: AccountId, accountTo: AccountId, amount: Money, auditTrail: AuditTrail);
    deposit(): void;
    withdraw(): void;
    transfer(): void;
    getId(): TransactionId;
    getType(): TransactionType;
    getStatus(): TransactionStatus;
    getAccountFrom(): AccountId;
    getAccountTo(): AccountId;
    getAmount(): Money;
    getAuditTrail(): AuditTrail;
    changeId(id: TransactionId): void;
}
