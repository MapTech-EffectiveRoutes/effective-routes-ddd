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
exports.PersonApplicationService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const register_person_response_dto_1 = require("../dtos/response/register-person-response.dto");
const register_person_validator_1 = require("../validators/register-person.validator");
const typescript_result_1 = require("typescript-result");
const register_person_command_1 = require("../commands/register-person.command");
const date_time_value_1 = require("../../../common/domain/value-objects/date-time.value");
const app_settings_1 = require("../../../common/application/app-settings");
let PersonApplicationService = class PersonApplicationService {
    constructor(commandBus, registerPersonValidator) {
        this.commandBus = commandBus;
        this.registerPersonValidator = registerPersonValidator;
    }
    async register(registerPersonRequest) {
        const notification = await this.registerPersonValidator.validate(registerPersonRequest);
        if (notification.hasErrors()) {
            return typescript_result_1.Result.error(notification);
        }
        const createdAt = date_time_value_1.DateTime.utcNow().format();
        const createdBy = app_settings_1.AppSettings.SUPER_ADMIN;
        const updatedAt = null;
        const updatedBy = null;
        const registerPerson = new register_person_command_1.RegisterPerson(registerPersonRequest.firstName, registerPersonRequest.lastName, registerPersonRequest.dni, createdAt, createdBy, updatedAt, updatedBy);
        const clientId = await this.commandBus.execute(registerPerson);
        const registerResponse = new register_person_response_dto_1.RegisterPersonResponse(clientId, registerPersonRequest.firstName, registerPersonRequest.lastName, registerPersonRequest.dni);
        return typescript_result_1.Result.ok(registerResponse);
    }
};
PersonApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        register_person_validator_1.RegisterPersonValidator])
], PersonApplicationService);
exports.PersonApplicationService = PersonApplicationService;
//# sourceMappingURL=person-application.service.js.map