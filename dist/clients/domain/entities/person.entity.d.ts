import { ClientId } from '../value-objects/client-id.value';
import { Dni } from '../value-objects/dni.value';
import { PersonName } from '../../../common/domain/value-objects/person-name.value';
import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { Client } from './client.entity';
export declare class Person extends Client {
    private name;
    private dni;
    constructor(name: PersonName, dni: Dni, auditTrail: AuditTrail);
    register(): void;
    getId(): ClientId;
    getName(): PersonName;
    getDni(): Dni;
    getAuditTrail(): AuditTrail;
    changeName(name: PersonName): void;
    changeDni(dni: Dni): void;
}
