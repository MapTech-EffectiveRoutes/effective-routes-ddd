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
exports.AmountTypeORM = void 0;
const typeorm_1 = require("typeorm");
class AmountTypeORM {
    constructor(amount, currency) {
        this.amount = Number(amount);
        this.currency = currency;
    }
    static from(amount, currency) {
        return new AmountTypeORM(amount, currency);
    }
}
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'amount', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], AmountTypeORM.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', length: 3, nullable: true }),
    __metadata("design:type", String)
], AmountTypeORM.prototype, "currency", void 0);
exports.AmountTypeORM = AmountTypeORM;
//# sourceMappingURL=amount.typeorm.js.map