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
exports.AccountIdFromTypeORM = void 0;
const typeorm_1 = require("typeorm");
class AccountIdFromTypeORM {
    constructor(value) {
        this.value = Number(value);
    }
    static from(value) {
        return new AccountIdFromTypeORM(value);
    }
}
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'from_account_id', unsigned: true }),
    __metadata("design:type", Number)
], AccountIdFromTypeORM.prototype, "value", void 0);
exports.AccountIdFromTypeORM = AccountIdFromTypeORM;
//# sourceMappingURL=account-id-from.typeorm.js.map