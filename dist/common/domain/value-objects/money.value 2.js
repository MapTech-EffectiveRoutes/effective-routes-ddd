"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    constructor(amount, currency) {
        this.amount = Number(amount);
        this.currency = currency;
    }
    static create(amount, currency) {
        return new Money(amount, currency);
    }
    add(other) {
        return this.newMoney(this.amount + other.getAmount());
    }
    subtract(other) {
        return this.newMoney(this.amount - other.getAmount());
    }
    newMoney(amount) {
        return new Money(amount, this.currency);
    }
    getAmount() {
        return this.amount;
    }
    getCurrency() {
        return this.currency;
    }
}
exports.Money = Money;
//# sourceMappingURL=money.value.js.map