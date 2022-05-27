"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const app_notification_1 = require("../../application/app.notification");
const typescript_result_1 = require("typescript-result");
class Password {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        let notification = new app_notification_1.AppNotification();
        value = (value !== null && value !== void 0 ? value : "").trim();
        if (value === "") {
            notification.addError('password is required', null);
        }
        if (value.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of a password is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new Password(value));
    }
}
exports.Password = Password;
Password.MAX_LENGTH = 32;
//# sourceMappingURL=password.value.js.map