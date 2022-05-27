"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyFactory = void 0;
const company_entity_1 = require("../entities/company.entity");
class CompanyFactory {
    static createFrom(name, ruc, auditTrail) {
        return new company_entity_1.Company(name, ruc, auditTrail);
    }
}
exports.CompanyFactory = CompanyFactory;
//# sourceMappingURL=company.factory.js.map