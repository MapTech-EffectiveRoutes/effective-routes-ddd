"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNumber = void 0;
const typescript_result_1 = require("typescript-result");
const app_notification_1 = require("../../../common/application/app.notification");
class AccountNumber {
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        let notification = new app_notification_1.AppNotification();
        value = (value !== null && value !== void 0 ? value : "").trim();
        if (value === "") {
            notification.addError('account number is required', null);
        }
        if (value.length > this.MAX_LENGTH) {
            notification.addError('The maximum length of an account number is ' + this.MAX_LENGTH + ' characters including spaces', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new AccountNumber(value));
    }
    getValue() {
        return this.value;
    }
}
exports.AccountNumber = AccountNumber;
AccountNumber.MAX_LENGTH = 15;
//# sourceMappingURL=account-number.value.js.map