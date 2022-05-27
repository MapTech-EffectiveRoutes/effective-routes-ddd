"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class Client extends cqrs_1.AggregateRoot {
    constructor(type, auditTrail) {
        super();
        this.type = type;
        this.auditTrail = auditTrail;
    }
    getId() {
        return this.id;
    }
    getType() {
        return this.type;
    }
    getAuditTrail() {
        return this.auditTrail;
    }
    changeId(id) {
        this.id = id;
    }
}
exports.Client = Client;
//# sourceMappingURL=client.entity.js.map