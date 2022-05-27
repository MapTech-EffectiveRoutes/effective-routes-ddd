"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const client_entity_1 = require("./client.entity");
const client_type_enum_1 = require("../enums/client-type.enum");
const person_registered_event_1 = require("../events/person-registered.event");
class Person extends client_entity_1.Client {
    constructor(name, dni, auditTrail) {
        super(client_type_enum_1.ClientType.PERSON, auditTrail);
        this.name = name;
        this.dni = dni;
    }
    register() {
        const event = new person_registered_event_1.PersonRegistered(this.id.getValue(), this.name.getFirstName(), this.name.getLastName(), this.dni.getValue());
        this.apply(event);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDni() {
        return this.dni;
    }
    getAuditTrail() {
        return this.auditTrail;
    }
    changeName(name) {
        this.name = name;
    }
    changeDni(dni) {
        this.dni = dni;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.entity.js.map