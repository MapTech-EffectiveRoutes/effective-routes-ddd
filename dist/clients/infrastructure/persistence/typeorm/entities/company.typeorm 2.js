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
exports.CompanyTypeORM = void 0;
const typeorm_1 = require("typeorm");
const client_typeorm_1 = require("./client.typeorm");
const ruc_typeorm_1 = require("../value-objects/ruc.typeorm");
const company_name_typeorm_1 = require("../value-objects/company-name.typeorm");
const client_type_enum_1 = require("../../../../domain/enums/client-type.enum");
let CompanyTypeORM = class CompanyTypeORM extends client_typeorm_1.ClientTypeORM {
};
__decorate([
    (0, typeorm_1.Column)((type) => company_name_typeorm_1.CompanyNameTypeORM, { prefix: false }),
    __metadata("design:type", company_name_typeorm_1.CompanyNameTypeORM)
], CompanyTypeORM.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)((type) => ruc_typeorm_1.RucTypeORM, { prefix: false }),
    __metadata("design:type", ruc_typeorm_1.RucTypeORM)
], CompanyTypeORM.prototype, "ruc", void 0);
CompanyTypeORM = __decorate([
    (0, typeorm_1.ChildEntity)(client_type_enum_1.ClientType.COMPANY)
], CompanyTypeORM);
exports.CompanyTypeORM = CompanyTypeORM;
//# sourceMappingURL=company.typeorm.js.map