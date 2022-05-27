"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountFactory = void 0;
const account_entity_1 = require("../entities/account.entity");
class AccountFactory {
    static createFrom(number, balance, clientId, auditTrail) {
        return new account_entity_1.Account(number, balance, clientId, auditTrail);
    }
    static withId(accountId, number, balance, clientId, auditTrail) {
        let account = new account_entity_1.Account(number, balance, clientId, auditTrail);
        account.changeId(accountId);
        return account;
    }
}
exports.AccountFactory = AccountFactory;
//# sourceMappingURL=account.factory.js.map