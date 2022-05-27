"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const client_entity_1 = require("./client.entity");
const client_type_enum_1 = require("../enums/client-type.enum");
const company_registered_event_1 = require("../events/company-registered.event");
class Company extends client_entity_1.Client {
    constructor(name, ruc, auditTrail) {
        super(client_type_enum_1.ClientType.COMPANY, auditTrail);
        this.name = name;
        this.ruc = ruc;
    }
    register() {
        const event = new company_registered_event_1.CompanyRegistered(this.id.getValue(), this.name.getValue(), this.ruc.getValue());
        this.apply(event);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getRuc() {
        return this.ruc;
    }
    changeName(name) {
        this.name = name;
    }
    changeRuc(ruc) {
        this.ruc = ruc;
    }
}
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map