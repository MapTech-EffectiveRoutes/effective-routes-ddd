"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotification = void 0;
const app_error_1 = require("./app.error");
class AppNotification {
    constructor() {
        this.errors = [];
    }
    addError(message, cause) {
        this.errors.push(new app_error_1.AppError(message, cause));
    }
    hasErrors() {
        return this.errors.length > 0;
    }
    getErrors() {
        return this.errors;
    }
}
exports.AppNotification = AppNotification;
//# sourceMappingURL=app.notification.js.map