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
exports.GetCustomersPersonHandler = void 0;
const get_customers_person_query_1 = require("../../queries/get-customers-person.query");
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("typeorm");
const get_customers_person_dto_1 = require("../../dtos/queries/get-customers-person.dto");
let GetCustomersPersonHandler = class GetCustomersPersonHandler {
    constructor() { }
    async execute(query) {
        const manager = (0, typeorm_1.getManager)();
        const sql = `
    SELECT 
      id,
      first_name as firstName,
      last_name as lastName,
      dni
    FROM 
      clients
    WHERE
      type = 'P'
    ORDER BY
      last_name, first_name;`;
        const ormCustomers = await manager.query(sql);
        if (ormCustomers.length <= 0) {
            return [];
        }
        const customers = ormCustomers.map(function (ormCustomer) {
            let customerDto = new get_customers_person_dto_1.GetCustomersPersonDto();
            customerDto.id = Number(ormCustomer.id);
            customerDto.firstName = ormCustomer.firstName;
            customerDto.lastName = ormCustomer.lastName;
            customerDto.dni = ormCustomer.dni;
            return customerDto;
        });
        return customers;
    }
};
GetCustomersPersonHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_customers_person_query_1.GetCustomersPersonQuery),
    __metadata("design:paramtypes", [])
], GetCustomersPersonHandler);
exports.GetCustomersPersonHandler = GetCustomersPersonHandler;
//# sourceMappingURL=get-customers-person.handler.js.map