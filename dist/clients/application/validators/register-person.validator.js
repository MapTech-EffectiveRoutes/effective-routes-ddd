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
exports.RegisterPersonValidator = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_notification_1 = require("../../../common/application/app.notification");
const typeorm_2 = require("typeorm");
const person_typeorm_1 = require("../../infrastructure/persistence/typeorm/entities/person.typeorm");
let RegisterPersonValidator = class RegisterPersonValidator {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async validate(registerPersonRequest) {
        let notification = new app_notification_1.AppNotification();
        const firstName = registerPersonRequest.firstName ? registerPersonRequest.firstName.trim() : '';
        if (firstName.length <= 0) {
            notification.addError('firstName is required', null);
        }
        const lastName = registerPersonRequest.lastName ? registerPersonRequest.lastName.trim() : '';
        if (lastName.length <= 0) {
            notification.addError('lastName is required', null);
        }
        const dni = registerPersonRequest.dni ? registerPersonRequest.dni.trim() : '';
        if (dni.length <= 0) {
            notification.addError('dni is required', null);
        }
        if (notification.hasErrors()) {
            return notification;
        }
        const customer = await this.personRepository.createQueryBuilder().where("dni = :dni", { dni }).getOne();
        if (customer != null) {
            notification.addError('dni is taken', null);
        }
        return notification;
    }
};
RegisterPersonValidator = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(person_typeorm_1.PersonTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegisterPersonValidator);
exports.RegisterPersonValidator = RegisterPersonValidator;
//# sourceMappingURL=register-person.validator.js.map