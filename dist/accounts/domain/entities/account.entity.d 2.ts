import { ClientId } from '../../../clients/domain/value-objects/client-id.value';
import { Money } from '../../../common/domain/value-objects/money.value';
import { AppNotification } from '../../../common/application/app.notification';
import { Result } from 'typescript-result';
import { AggregateRoot } from '@nestjs/cqrs';
import { AccountId } from '../value-objects/account-id.value';
import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { AccountNumber } from '../value-objects/account-number.value';
export declare class Account extends AggregateRoot {
    private id;
    private readonly number;
    private balance;
    private readonly clientId;
    private readonly auditTrail;
    constructor(number: AccountNumber, balance: Money, clientId: ClientId, auditTrail: AuditTrail);
    open(): void;
    deposit(amount: Money): Result<AppNotification, Account>;
    withdraw(amount: Money): Result<AppNotification, Account>;
    validate(amount: Money): AppNotification;
    exist(): boolean;
    doesNotExist(): boolean;
    hasIdentity(): boolean;
    getId(): AccountId;
    getNumber(): AccountNumber;
    getBalance(): Money;
    getClientId(): ClientId;
    getAuditTrail(): AuditTrail;
    changeId(id: AccountId): void;
}
