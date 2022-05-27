"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dni = void 0;
const app_notification_1 = require("../../../common/application/app.notification");
const typescript_result_1 = require("typescript-result");
class Dni {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    static create(value) {
        let notification = new app_notification_1.AppNotification();
        value = (value !== null && value !== void 0 ? value : "").trim();
        if (value === "") {
            notification.addError('dni is required', null);
        }
        if (value.length != this.MAX_LENGTH) {
            notification.addError('dni field must have ' + Dni.MAX_LENGTH + ' characters', null);
        }
        const regExp = new RegExp('^[0-9]+$');
        if (regExp.test(value) === false) {
            notification.addError('dni format is invalid', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new Dni(value));
    }
}
exports.Dni = Dni;
Dni.MAX_LENGTH = 8;
//# sourceMappingURL=dni.value.js.map