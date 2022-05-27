"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyName = void 0;
const typescript_result_1 = require("typescript-result");
const app_notification_1 = require("../../application/app.notification");
class CompanyName {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    static create(name) {
        let notification = new app_notification_1.AppNotification();
        name = (name !== null && name !== void 0 ? name : "").trim();
        if (name === "") {
            notification.addError('name is required', null);
        }
        if (name.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of an name is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new CompanyName(name));
    }
}
exports.CompanyName = CompanyName;
CompanyName.MAX_LENGTH = 150;
//# sourceMappingURL=company-name.value.js.map