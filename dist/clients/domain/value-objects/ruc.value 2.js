"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruc = void 0;
const app_notification_1 = require("../../../common/application/app.notification");
const typescript_result_1 = require("typescript-result");
class Ruc {
    constructor(value) {
        this.value = value;
    }
    static create(ruc) {
        let notification = new app_notification_1.AppNotification();
        ruc = (ruc !== null && ruc !== void 0 ? ruc : "").trim();
        if (ruc === "") {
            notification.addError('ruc is required', null);
        }
        if (ruc.length != this.MAX_LENGTH) {
            notification.addError('ruc field must have ' + Ruc.MAX_LENGTH + ' characters', null);
        }
        const regExp = new RegExp('^[0-9]+$');
        if (regExp.test(ruc) === false) {
            notification.addError('ruc format is invalid', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new Ruc(ruc));
    }
    getValue() {
        return this.value;
    }
}
exports.Ruc = Ruc;
Ruc.MAX_LENGTH = 11;
//# sourceMappingURL=ruc.value.js.map