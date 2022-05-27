import { ClientId } from '../value-objects/client-id.value';
import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { Client } from './client.entity';
import { Ruc } from '../value-objects/ruc.value';
import { CompanyName } from '../../../common/domain/value-objects/company-name.value';
export declare class Company extends Client {
    private name;
    private ruc;
    constructor(name: CompanyName, ruc: Ruc, auditTrail: AuditTrail);
    register(): void;
    getId(): ClientId;
    getName(): CompanyName;
    getRuc(): Ruc;
    changeName(name: CompanyName): void;
    changeRuc(ruc: Ruc): void;
}
