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
exports.TransferMoneyValidator = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_notification_1 = require("../../../common/application/app.notification");
const typeorm_2 = require("typeorm");
const account_typeorm_1 = require("../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm");
let TransferMoneyValidator = class TransferMoneyValidator {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async validate(transferRequestDto) {
        let notification = new app_notification_1.AppNotification();
        const fromAccountNumber = transferRequestDto.fromAccountNumber.trim();
        if (fromAccountNumber.length <= 0) {
            notification.addError('From account number is required', null);
        }
        const toAccountNumber = transferRequestDto.toAccountNumber.trim();
        if (toAccountNumber.length <= 0) {
            notification.addError('To account number is required', null);
        }
        if (notification.hasErrors()) {
            return notification;
        }
        const fromAccountTypeORM = await this.accountRepository.createQueryBuilder()
            .where("number = :number")
            .setParameter("number", fromAccountNumber)
            .getOne();
        if (fromAccountTypeORM == null) {
            notification.addError('From account number not found', null);
        }
        const toAccountTypeORM = await this.accountRepository.createQueryBuilder()
            .where("number = :number")
            .setParameter("number", toAccountNumber)
            .getOne();
        if (toAccountTypeORM == null) {
            notification.addError('To account number not found', null);
        }
        const amount = transferRequestDto.amount;
        if (amount <= 0) {
            notification.addError('Amount must be greater than zero', null);
        }
        return notification;
    }
};
TransferMoneyValidator = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_typeorm_1.AccountTypeORM)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransferMoneyValidator);
exports.TransferMoneyValidator = TransferMoneyValidator;
//# sourceMappingURL=transfer-money.validator.js.map