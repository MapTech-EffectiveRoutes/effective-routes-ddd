import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { Dni } from '../value-objects/dni.value';
import { Person } from '../entities/person.entity';
import { PersonName } from '../../../common/domain/value-objects/person-name.value';
export declare class PersonFactory {
    static createFrom(name: PersonName, dni: Dni, auditTrail: AuditTrail): Person;
}
