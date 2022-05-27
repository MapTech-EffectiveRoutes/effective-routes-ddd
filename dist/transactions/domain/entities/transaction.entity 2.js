"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const money_deposited_event_1 = require("../events/money-deposited.event");
const money_withdrawn_event_1 = require("../events/money-withdrawn.event");
const money_transferred_event_1 = require("../events/money-transferred.event");
class Transaction extends cqrs_1.AggregateRoot {
    constructor(type, status, accountFrom, accountTo, amount, auditTrail) {
        super();
        this.type = type;
        this.status = status;
        this.accountFrom = accountFrom;
        this.accountTo = accountTo;
        this.amount = amount;
        this.auditTrail = auditTrail;
    }
    deposit() {
        const event = new money_deposited_event_1.MoneyDeposited(this.id.getValue(), this.accountFrom.getValue(), this.amount.getAmount(), this.status, null);
        this.apply(event);
    }
    withdraw() {
        const event = new money_withdrawn_event_1.MoneyWithdrawn(this.id.getValue(), this.accountFrom.getValue(), this.amount.getAmount(), this.status, null);
        this.apply(event);
    }
    transfer() {
        const event = new money_transferred_event_1.MoneyTransferred(this.id.getValue(), this.accountFrom.getValue(), this.accountTo.getValue(), this.amount.getAmount(), this.status, null);
        this.apply(event);
    }
    getId() {
        return this.id;
    }
    getType() {
        return this.type;
    }
    getStatus() {
        return this.status;
    }
    getAccountFrom() {
        return this.accountFrom;
    }
    getAccountTo() {
        return this.accountTo;
    }
    getAmount() {
        return this.amount;
    }
    getAuditTrail() {
        return this.auditTrail;
    }
    changeId(id) {
        this.id = id;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map