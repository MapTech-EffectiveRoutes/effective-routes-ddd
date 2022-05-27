"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = exports.QueryHandlers = exports.EventHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const clients_controller_1 = require("./api/clients.controller");
const company_application_service_1 = require("./application/services/company-application.service");
const cqrs_1 = require("@nestjs/cqrs");
const register_person_validator_1 = require("./application/validators/register-person.validator");
const typeorm_1 = require("@nestjs/typeorm");
const register_company_handler_1 = require("./application/handlers/commands/register-company.handler");
const person_registered_handler_1 = require("./application/handlers/events/person-registered.handler");
const get_customers_person_handler_1 = require("./application/handlers/queries/get-customers-person.handler");
const person_application_service_1 = require("./application/services/person-application.service");
const register_company_validator_1 = require("./application/validators/register-company.validator");
const register_person_handler_1 = require("./application/handlers/commands/register-person.handler");
const company_typeorm_1 = require("./infrastructure/persistence/typeorm/entities/company.typeorm");
const person_typeorm_1 = require("./infrastructure/persistence/typeorm/entities/person.typeorm");
const client_typeorm_1 = require("./infrastructure/persistence/typeorm/entities/client.typeorm");
const company_registered_handler_1 = require("./application/handlers/events/company-registered.handler");
const get_customers_company_handler_1 = require("./application/handlers/queries/get-customers-company.handler");
const money_transferred_handler_1 = require("./application/handlers/events/money-transferred.handler");
exports.CommandHandlers = [register_person_handler_1.RegisterPersonHandler, register_company_handler_1.RegisterCompanyHandler];
exports.EventHandlers = [person_registered_handler_1.PersonRegisteredHandler, company_registered_handler_1.CompanyRegisteredHandler, money_transferred_handler_1.MoneyTransferredHandler];
exports.QueryHandlers = [get_customers_person_handler_1.GetCustomersPersonHandler, get_customers_company_handler_1.GetCustomersCompanyHandler];
let ClientsModule = class ClientsModule {
};
ClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            typeorm_1.TypeOrmModule.forFeature([client_typeorm_1.ClientTypeORM, person_typeorm_1.PersonTypeORM, company_typeorm_1.CompanyTypeORM]),
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [clients_controller_1.ClientsController],
        providers: [
            person_application_service_1.PersonApplicationService,
            company_application_service_1.CompanyApplicationService,
            register_person_validator_1.RegisterPersonValidator,
            register_company_validator_1.RegisterCompanyValidator,
            ...exports.CommandHandlers,
            ...exports.EventHandlers,
            ...exports.QueryHandlers
        ]
    })
], ClientsModule);
exports.ClientsModule = ClientsModule;
//# sourceMappingURL=clients.module.js.map