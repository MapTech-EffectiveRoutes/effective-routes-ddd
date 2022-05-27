"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRegistered = void 0;
const customer_registered_event_1 = require("./customer-registered.event");
class PersonRegistered extends customer_registered_event_1.CustomerRegistered {
    constructor(id, firstName, lastName, dni) {
        super(id);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
    }
}
exports.PersonRegistered = PersonRegistered;
//# sourceMappingURL=person-registered.event.js.map