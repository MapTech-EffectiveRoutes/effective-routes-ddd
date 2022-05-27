"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrail = void 0;
class AuditTrail {
    constructor(createdAt, createdBy, updatedAt, updatedBy) {
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
    }
    static from(createdAt, createdBy, updatedAt, updatedBy) {
        return new AuditTrail(createdAt, createdBy, updatedAt, updatedBy);
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getCreatedBy() {
        return this.createdBy;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getUpdatedBy() {
        return this.updatedBy;
    }
}
exports.AuditTrail = AuditTrail;
//# sourceMappingURL=audit-trail.value.js.map