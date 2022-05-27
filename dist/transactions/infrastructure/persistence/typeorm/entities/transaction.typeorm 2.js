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
exports.TransactionTypeORM = void 0;
const typeorm_1 = require("typeorm");
const account_id_from_typeorm_1 = require("../value-objects/account-id-from.typeorm");
const account_id_to_typeorm_1 = require("../value-objects/account-id-to.typeorm");
const amount_typeorm_1 = require("../value-objects/amount.typeorm");
const audit_trail_typeorm_1 = require("../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
const transaction_status_enum_1 = require("../../../../domain/enums/transaction.status.enum");
let TransactionTypeORM = class TransactionTypeORM {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], TransactionTypeORM.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'type', length: 1, nullable: false }),
    __metadata("design:type", String)
], TransactionTypeORM.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => account_id_from_typeorm_1.AccountIdFromTypeORM, { prefix: false }),
    __metadata("design:type", account_id_from_typeorm_1.AccountIdFromTypeORM)
], TransactionTypeORM.prototype, "accountIdFrom", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => account_id_to_typeorm_1.AccountIdToTypeORM, { prefix: false }),
    __metadata("design:type", account_id_to_typeorm_1.AccountIdToTypeORM)
], TransactionTypeORM.prototype, "accountIdTo", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => amount_typeorm_1.AmountTypeORM, { prefix: false }),
    __metadata("design:type", amount_typeorm_1.AmountTypeORM)
], TransactionTypeORM.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 2, unsigned: true, nullable: false, }),
    __metadata("design:type", Number)
], TransactionTypeORM.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => audit_trail_typeorm_1.AuditTrailTypeORM, { prefix: false }),
    __metadata("design:type", audit_trail_typeorm_1.AuditTrailTypeORM)
], TransactionTypeORM.prototype, "auditTrail", void 0);
TransactionTypeORM = __decorate([
    (0, typeorm_1.Entity)('transactions')
], TransactionTypeORM);
exports.TransactionTypeORM = TransactionTypeORM;
//# sourceMappingURL=transaction.typeorm.js.map