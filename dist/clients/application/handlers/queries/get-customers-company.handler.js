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
exports.GetCustomersCompanyHandler = void 0;
const get_customers_company_query_1 = require("../../queries/get-customers-company.query");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("typeorm");
const get_customers_company_dto_1 = require("../../dtos/queries/get-customers-company.dto");
let GetCustomersCompanyHandler = class GetCustomersCompanyHandler {
    constructor() { }
    async execute(query) {
        const manager = (0, typeorm_1.getManager)();
        const sql = `
    SELECT 
      id,
      company_name as companyName,
      ruc
    FROM 
      clients
    WHERE
      type = 'C'
    ORDER BY
      company_name;`;
        const ormCustomers = await manager.query(sql);
        if (ormCustomers.length <= 0) {
            return [];
        }
        const customers = ormCustomers.map(function (ormCustomer) {
            let customerDto = new get_customers_company_dto_1.GetCustomersCompanyDto();
            customerDto.id = Number(ormCustomer.id);
            customerDto.companyName = ormCustomer.companyName;
            customerDto.ruc = ormCustomer.ruc;
            return customerDto;
        });
        return customers;
    }
};
GetCustomersCompanyHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_customers_company_query_1.GetCustomersCompanyQuery),
    __metadata("design:paramtypes", [])
], GetCustomersCompanyHandler);
exports.GetCustomersCompanyHandler = GetCustomersCompanyHandler;
//# sourceMappingURL=get-customers-company.handler.js.map