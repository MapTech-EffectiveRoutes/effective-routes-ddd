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
exports.ClientTypeORM = void 0;
const typeorm_1 = require("typeorm");
const audit_trail_typeorm_1 = require("../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
const client_type_enum_1 = require("../../../../domain/enums/client-type.enum");
let ClientTypeORM = class ClientTypeORM {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], ClientTypeORM.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => audit_trail_typeorm_1.AuditTrailTypeORM, { prefix: false }),
    __metadata("design:type", audit_trail_typeorm_1.AuditTrailTypeORM)
], ClientTypeORM.prototype, "auditTrail", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'enum', enum: client_type_enum_1.ClientType, default: client_type_enum_1.ClientType.COMPANY }),
    __metadata("design:type", String)
], ClientTypeORM.prototype, "type", void 0);
ClientTypeORM = __decorate([
    (0, typeorm_1.Entity)('clients'),
    (0, typeorm_1.TableInheritance)({ column: 'type', })
], ClientTypeORM);
exports.ClientTypeORM = ClientTypeORM;
//# sourceMappingURL=client.typeorm.js.map