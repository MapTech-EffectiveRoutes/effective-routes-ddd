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
exports.DniTypeORM = void 0;
const typeorm_1 = require("typeorm");
class DniTypeORM {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        return new DniTypeORM(value);
    }
}
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dni', length: 8, nullable: false }),
    __metadata("design:type", String)
], DniTypeORM.prototype, "value", void 0);
exports.DniTypeORM = DniTypeORM;
//# sourceMappingURL=dni.typeorm.js.map