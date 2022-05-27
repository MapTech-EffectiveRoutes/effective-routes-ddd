import { AuditTrail } from '../../../common/domain/value-objects/audit-trail.value';
import { CompanyName } from '../../../common/domain/value-objects/company-name.value';
import { Company } from '../entities/company.entity';
import { Ruc } from '../value-objects/ruc.value';
export declare class CompanyFactory {
    static createFrom(name: CompanyName, ruc: Ruc, auditTrail: AuditTrail): Company;
}
