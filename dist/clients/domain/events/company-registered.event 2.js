"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRegistered = void 0;
const customer_registered_event_1 = require("./customer-registered.event");
class CompanyRegistered extends customer_registered_event_1.CustomerRegistered {
    constructor(id, name, ruc) {
        super(id);
        this.id = id;
        this.name = name;
        this.ruc = ruc;
    }
}
exports.CompanyRegistered = CompanyRegistered;
//# sourceMappingURL=company-registered.event.js.map