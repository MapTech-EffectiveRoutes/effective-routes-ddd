"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMapper = void 0;
const account_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/account.typeorm");
const account_number_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/account-number.typeorm");
const customer_id_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/customer-id.typeorm");
const balance_typeorm_1 = require("../../infrastructure/persistence/typeorm/value-objects/balance.typeorm");
const audit_trail_typeorm_1 = require("../../../common/infrastructure/persistence/typeorm/value-objects/audit-trail.typeorm");
class AccountMapper {
    static toTypeORM(account) {
        const accountTypeORM = new account_typeorm_1.AccountTypeORM();
        accountTypeORM.id = account.getId() != null ? account.getId().getValue() : 0;
        accountTypeORM.number = account.getNumber() != null ? account_number_typeorm_1.AccountNumberTypeORM.from(account.getNumber().getValue()) : null;
        accountTypeORM.balance = account.getBalance() != null ? balance_typeorm_1.BalanceTypeORM.from(account.getBalance().getAmount(), account.getBalance().getCurrency()) : null;
        accountTypeORM.clientId = account.getClientId() != null ? customer_id_typeorm_1.CustomerIdTypeORM.from(account.getClientId().getValue()) : null;
        accountTypeORM.auditTrail = account.getAuditTrail() != null ? audit_trail_typeorm_1.AuditTrailTypeORM.from(account.getAuditTrail().getCreatedAt().format(), account.getAuditTrail().getCreatedBy().getValue(), account.getAuditTrail().getUpdatedAt().format(), account.getAuditTrail().getUpdatedBy().getValue()) : null;
        return accountTypeORM;
    }
}
exports.AccountMapper = AccountMapper;
//# sourceMappingURL=account.mapper.js.map