"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const typescript_result_1 = require("typescript-result");
const app_notification_1 = require("../../application/app.notification");
class Address {
    constructor(address, districtId) {
        this.address = address;
        this.districtId = districtId;
    }
    static create(address, districtId) {
        let notification = new app_notification_1.AppNotification();
        address = (address !== null && address !== void 0 ? address : "").trim();
        districtId = (districtId !== null && districtId !== void 0 ? districtId : "").trim();
        if (address === "") {
            notification.addError('address is required', null);
        }
        if (districtId === "") {
            notification.addError('districtId is required', null);
        }
        if (address.length > this.ADDRESS_MAX_LENGTH) {
            notification.addError('The maximum length of an address is ' + this.ADDRESS_MAX_LENGTH + ' characters including spaces', null);
        }
        if (districtId.length != this.DISTRICT_ID_MAX_LENGTH) {
            notification.addError('districtId field must have ' + this.DISTRICT_ID_MAX_LENGTH + ' characters', null);
        }
        const regExp = new RegExp('^[0-9]$');
        if (regExp.test(districtId) === false) {
            notification.addError('districtId format is invalid', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        return typescript_result_1.Result.ok(new Address(address, districtId));
    }
}
exports.Address = Address;
Address.ADDRESS_MAX_LENGTH = 100;
Address.DISTRICT_ID_MAX_LENGTH = 6;
//# sourceMappingURL=address.value.js.map