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
exports.AccountTypeORM = void 0;
const typeorm_1 = require("typeorm");
const account_number_typeorm_1 = require("../value-objects/account-number.typeorm");
const balance_typeorm_1 = require("../value-objects/balance.typeorm");
const customer_id_typeorm_1 = require("../value-objects/customer-id.typeorm");
const audit_trail_typeorm_1 = require("../../../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
let AccountTypeORM = class AccountTypeORM {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], AccountTypeORM.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => account_number_typeorm_1.AccountNumberTypeORM, { prefix: false }),
    __metadata("design:type", account_number_typeorm_1.AccountNumberTypeORM)
], AccountTypeORM.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => balance_typeorm_1.BalanceTypeORM, { prefix: false }),
    __metadata("design:type", balance_typeorm_1.BalanceTypeORM)
], AccountTypeORM.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => customer_id_typeorm_1.CustomerIdTypeORM, { prefix: false }),
    __metadata("design:type", customer_id_typeorm_1.CustomerIdTypeORM)
], AccountTypeORM.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => audit_trail_typeorm_1.AuditTrailTypeORM, { prefix: false }),
    __metadata("design:type", audit_trail_typeorm_1.AuditTrailTypeORM)
], AccountTypeORM.prototype, "auditTrail", void 0);
AccountTypeORM = __decorate([
    (0, typeorm_1.Entity)('accounts'),
    (0, typeorm_1.Unique)('UQ_accounts_number', ['number.value'])
], AccountTypeORM);
exports.AccountTypeORM = AccountTypeORM;
//# sourceMappingURL=account.typeorm.js.map