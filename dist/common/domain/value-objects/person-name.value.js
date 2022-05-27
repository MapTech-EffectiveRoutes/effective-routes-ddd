"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonName = void 0;
const typescript_result_1 = require("typescript-result");
const app_notification_1 = require("../../application/app.notification");
class PersonName {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    static create(firstName, lastName) {
        let notification = new app_notification_1.AppNotification();
        firstName = (firstName !== null && firstName !== void 0 ? firstName : "").trim();
        lastName = (lastName !== null && lastName !== void 0 ? lastName : "").trim();
        if (firstName === "") {
            notification.addError('firstName is required', null);
        }
        if (lastName === "") {
            notification.addError('lastName is required', null);
        }
        if (firstName.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of an firstName is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        if (lastName.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of an lastName is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new PersonName(firstName, lastName));
    }
}
exports.PersonName = PersonName;
PersonName.MAX_LENGTH = 75;
//# sourceMappingURL=person-name.value.js.map