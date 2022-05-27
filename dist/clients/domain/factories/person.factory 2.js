"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonFactory = void 0;
const person_entity_1 = require("../entities/person.entity");
class PersonFactory {
    static createFrom(name, dni, auditTrail) {
        return new person_entity_1.Person(name, dni, auditTrail);
    }
}
exports.PersonFactory = PersonFactory;
//# sourceMappingURL=person.factory.js.map