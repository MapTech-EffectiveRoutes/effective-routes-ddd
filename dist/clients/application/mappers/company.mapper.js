"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMapper = void 0;
const ruc_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/ruc.typeorm");
const company_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/company.typeorm");
const company_name_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/company-name.typeorm");
const audit_trail_typeorm_1 = require("../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
class CompanyMapper {
    static toTypeORM(company) {
        const companyTypeORM = new company_typeorm_1.CompanyTypeORM();
        companyTypeORM.companyName = company_name_typeorm_1.CompanyNameTypeORM.from(company.getName().getValue());
        companyTypeORM.ruc = ruc_typeorm_1.RucTypeORM.from(company.getRuc().getValue());
        const createdAt = company.getAuditTrail() != null && company.getAuditTrail().getCreatedAt() != null ? company.getAuditTrail().getCreatedAt().format() : null;
        const createdBy = company.getAuditTrail() != null && company.getAuditTrail().getCreatedBy() != null ? company.getAuditTrail().getCreatedBy().getValue() : null;
        const updatedAt = company.getAuditTrail() != null && company.getAuditTrail().getUpdatedAt() != null ? company.getAuditTrail().getUpdatedAt().format() : null;
        const updatedBy = company.getAuditTrail() != null && company.getAuditTrail().getUpdatedBy() != null ? company.getAuditTrail().getUpdatedBy().getValue() : null;
        const auditTrailTypeORM = audit_trail_typeorm_1.AuditTrailTypeORM.from(createdAt, createdBy, updatedAt, updatedBy);
        companyTypeORM.auditTrail = auditTrailTypeORM;
        return companyTypeORM;
    }
}
exports.CompanyMapper = CompanyMapper;
//# sourceMappingURL=company.mapper.js.map