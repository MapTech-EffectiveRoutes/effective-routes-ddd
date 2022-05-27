"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrailTypeORM = void 0;
const typeorm_1 = require("typeorm");
class AuditTrailTypeORM {
    constructor(createdAt, createdBy, updatedAt, updatedBy) {
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;
    }
    static from(createdAt, createdBy, updatedAt, updatedBy) {
        return new AuditTrailTypeORM(createdAt, createdBy, updatedAt, updatedBy);
    }
}
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'created_at', nullable: true }),
    __metadata("design:type", String)
], AuditTrailTypeORM.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], AuditTrailTypeORM.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updated_at', nullable: true }),
    __metadata("design:type", String)
], AuditTrailTypeORM.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], AuditTrailTypeORM.prototype, "updatedBy", void 0);
exports.AuditTrailTypeORM = AuditTrailTypeORM;
//# sourceMappingURL=audit-trail.typeorm.js.map