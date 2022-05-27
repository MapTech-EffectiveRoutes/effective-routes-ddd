import { AggregateRoot } from '@nestjs/cqrs';
import { ClientId } from '../value-objects/client-id.value';
import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { ClientType } from '../enums/client-type.enum';
export declare class Client extends AggregateRoot {
    protected id: ClientId;
    protected type: ClientType;
    protected readonly auditTrail: AuditTrail;
    constructor(type: ClientType, auditTrail: AuditTrail);
    getId(): ClientId;
    getType(): ClientType;
    getAuditTrail(): AuditTrail;
    changeId(id: ClientId): void;
}
