"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonMapper = void 0;
const person_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/person.typeorm");
const person_name_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/person-name.typeorm");
const dni_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/dni.typeorm");
const audit_trail_typeorm_1 = require("../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
class PersonMapper {
    static toTypeORM(person) {
        const personTypeORM = new person_typeorm_1.PersonTypeORM();
        personTypeORM.name = person_name_typeorm_1.PersonNameTypeORM.from(person.getName().getFirstName(), person.getName().getLastName());
        personTypeORM.dni = dni_typeorm_1.DniTypeORM.from(person.getDni().getValue());
        const createdAt = person.getAuditTrail() != null && person.getAuditTrail().getCreatedAt() != null ? person.getAuditTrail().getCreatedAt().format() : null;
        const createdBy = person.getAuditTrail() != null && person.getAuditTrail().getCreatedBy() != null ? person.getAuditTrail().getCreatedBy().getValue() : null;
        const updatedAt = person.getAuditTrail() != null && person.getAuditTrail().getUpdatedAt() != null ? person.getAuditTrail().getUpdatedAt().format() : null;
        const updatedBy = person.getAuditTrail() != null && person.getAuditTrail().getUpdatedBy() != null ? person.getAuditTrail().getUpdatedBy().getValue() : null;
        const auditTrailTypeORM = audit_trail_typeorm_1.AuditTrailTypeORM.from(createdAt, createdBy, updatedAt, updatedBy);
        personTypeORM.auditTrail = auditTrailTypeORM;
        return personTypeORM;
    }
}
exports.PersonMapper = PersonMapper;
//# sourceMappingURL=person.mapper.js.map