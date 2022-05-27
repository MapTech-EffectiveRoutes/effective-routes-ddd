"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const app_notification_1 = require("../../application/app.notification");
const typescript_result_1 = require("typescript-result");
class Email {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        let notification = new app_notification_1.AppNotification();
        value = (value !== null && value !== void 0 ? value : "").trim();
        if (value === "") {
            notification.addError('email is required', null);
        }
        if (value.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of an email is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        const regExp = new RegExp('^(.+)@(.+)$');
        if (regExp.test(value) === false) {
            notification.addError('email format is invalid', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new Email(value));
    }
}
exports.Email = Email;
Email.MAX_LENGTH = 150;
//# sourceMappingURL=email.value.js.map