"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const app_notification_1 = require("../../../common/application/app.notification");
const typescript_result_1 = require("typescript-result");
const cqrs_1 = require("@nestjs/cqrs");
const account_opened_event_1 = require("../events/account-opened.event");
class Account extends cqrs_1.AggregateRoot {
    constructor(number, balance, clientId, auditTrail) {
        super();
        this.number = number;
        this.balance = balance;
        this.clientId = clientId;
        this.auditTrail = auditTrail;
    }
    open() {
        const event = new account_opened_event_1.AccountOpened(this.id.getValue(), this.number.getValue(), this.clientId.getValue());
        this.apply(event);
    }
    deposit(amount) {
        const notification = this.validate(amount);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        this.balance = this.balance.add(amount);
        return typescript_result_1.Result.ok(this);
    }
    withdraw(amount) {
        const notification = this.validate(amount);
        if (this.balance.getAmount() < amount.getAmount()) {
            notification.addError('Cannot withdraw in the account, amount is greater than balance', null);
        }
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        this.balance = this.balance.subtract(amount);
        return typescript_result_1.Result.ok(this);
    }
    validate(amount) {
        const notification = new app_notification_1.AppNotification();
        if (amount.getAmount() <= 0) {
            notification.addError('The amount must be greater than zero', null);
        }
        if (!this.hasIdentity()) {
            notification.addError('The account has no identity', null);
        }
        return notification;
    }
    exist() {
        return this.id != null && this.id.getValue() > 0;
    }
    doesNotExist() {
        return !this.exist();
    }
    hasIdentity() {
        return this.number.getValue().trim().length > 0;
    }
    getId() {
        return this.id;
    }
    getNumber() {
        return this.number;
    }
    getBalance() {
        return this.balance;
    }
    getClientId() {
        return this.clientId;
    }
    getAuditTrail() {
        return this.auditTrail;
    }
    changeId(id) {
        this.id = id;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map