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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPersonHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const person_factory_1 = require("../../../domain/factories/person.factory");
const client_id_value_1 = require("../../../domain/value-objects/client-id.value");
const dni_value_1 = require("../../../domain/value-objects/dni.value");
const person_name_value_1 = require("../../../../common/domain/value-objects/person-name.value");
const register_person_command_1 = require("../../commands/register-person.command");
const person_mapper_1 = require("../../mappers/person.mapper");
const person_typeorm_1 = require("../../../infrastructure/persistence/typeorm/entities/person.typeorm");
const audit_trail_value_1 = require("../../../../common/domain/value-objects/audit-trail.value");
const date_time_value_1 = require("../../../../common/domain/value-objects/date-time.value");
const user_id_value_1 = require("../../../../users/domain/value-objects/user-id.value");
let RegisterPersonHandler = class RegisterPersonHandler {
    constructor(personRepository, publisher) {
        this.personRepository = personRepository;
        this.publisher = publisher;
    }
    async execute(command) {
        let clientId = 0;
        const personNameResult = person_name_value_1.PersonName.create(command.firstName, command.lastName);
        if (personNameResult.isFailure()) {
            return clientId;
        }
        const dniResult = dni_value_1.Dni.create(command.dni);
        if (dniResult.isFailure()) {
            return clientId;
        }
        const auditTrail = audit_trail_value_1.AuditTrail.from(command.createdAt != null ? date_time_value_1.DateTime.fromString(command.createdAt) : null, command.createdBy != null ? user_id_value_1.UserId.of(command.createdBy) : null, command.updatedAt != null ? date_time_value_1.DateTime.fromString(command.updatedAt) : null, command.updatedBy != null ? user_id_value_1.UserId.of(command.updatedBy) : null);
        let person = person_factory_1.PersonFactory.createFrom(personNameResult.value, dniResult.value, auditTrail);
        let personTypeORM = person_mapper_1.PersonMapper.toTypeORM(person);
        personTypeORM = await this.personRepository.save(personTypeORM);
        if (personTypeORM == null) {
            return clientId;
        }
        clientId = Number(personTypeORM.id);
        person.changeId(client_id_value_1.ClientId.of(clientId));
        person = this.publisher.mergeObjectContext(person);
        person.register();
        person.commit();
        return clientId;
    }
};
RegisterPersonHandler = __decorate([
    (0, cqrs_1.CommandHandler)(register_person_command_1.RegisterPerson),
    __param(0, (0, typeorm_1.InjectRepository)(person_typeorm_1.PersonTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cqrs_1.EventPublisher])
], RegisterPersonHandler);
exports.RegisterPersonHandler = RegisterPersonHandler;
//# sourceMappingURL=register-person.handler.js.map