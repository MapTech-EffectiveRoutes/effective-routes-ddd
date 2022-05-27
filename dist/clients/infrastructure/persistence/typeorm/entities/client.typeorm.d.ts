import { AuditTrailTypeORM } from '../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm';
import { ClientType } from '../../../../domain/enums/client-type.enum';
export declare class ClientTypeORM {
    id: number;
    auditTrail: AuditTrailTypeORM;
    readonly type: ClientType;
}
