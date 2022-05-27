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
exports.PersonTypeORM = void 0;
const typeorm_1 = require("typeorm");
const client_typeorm_1 = require("./client.typeorm");
const dni_typeorm_1 = require("../value-objects/dni.typeorm");
const person_name_typeorm_1 = require("../value-objects/person-name.typeorm");
const client_type_enum_1 = require("../../../../domain/enums/client-type.enum");
let PersonTypeORM = class PersonTypeORM extends client_typeorm_1.ClientTypeORM {
};
__decorate([
    (0, typeorm_1.Column)((type) => person_name_typeorm_1.PersonNameTypeORM, { prefix: false }),
    __metadata("design:type", person_name_typeorm_1.PersonNameTypeORM)
], PersonTypeORM.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => dni_typeorm_1.DniTypeORM, { prefix: false }),
    __metadata("design:type", dni_typeorm_1.DniTypeORM)
], PersonTypeORM.prototype, "dni", void 0);
PersonTypeORM = __decorate([
    (0, typeorm_1.ChildEntity)(client_type_enum_1.ClientType.PERSON)
], PersonTypeORM);
exports.PersonTypeORM = PersonTypeORM;
//# sourceMappingURL=person.typeorm.js.map