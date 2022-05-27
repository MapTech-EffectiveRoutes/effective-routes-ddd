"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceTypeORM = void 0;
const typeorm_1 = require("typeorm");
class BalanceTypeORM {
    constructor(balance, currency) {
        this.balance = Number(balance);
        this.currency = currency;
    }
    static from(balance, currency) {
        return new BalanceTypeORM(balance, currency);
    }
}
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'balance', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BalanceTypeORM.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', length: 3, nullable: true }),
    __metadata("design:type", String)
], BalanceTypeORM.prototype, "currency", void 0);
exports.BalanceTypeORM = BalanceTypeORM;
//# sourceMappingURL=balance.typeorm.js.map