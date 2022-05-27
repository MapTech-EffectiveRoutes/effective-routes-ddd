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
exports.GetAccountsHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const typeorm_1 = require("typeorm");
const get_accounts_query_1 = require("../../queries/get-accounts.query");
const get_accounts_dto_1 = require("../../dtos/queries/get-accounts.dto");
let GetAccountsHandler = class GetAccountsHandler {
    constructor() { }
    async execute(query) {
        const manager = (0, typeorm_1.getManager)();
        const sql = `
    SELECT
      a.id,
      a.number,
      a.balance,
      a.client_id,
      a.created_at,
      a.created_by,
      a.updated_at,
      a.updated_by
    FROM 
      accounts a
    ORDER BY
      a.created_at DESC;`;
        const ormAccounts = await manager.query(sql);
        if (ormAccounts.length <= 0) {
            return [];
        }
        const accounts = ormAccounts.map(function (ormAccount) {
            let accountDto = new get_accounts_dto_1.GetAccountsDto();
            accountDto.id = Number(ormAccount.id);
            accountDto.number = ormAccount.number;
            accountDto.balance = Number(ormAccount.balance);
            accountDto.clientId = Number(ormAccount.client_id);
            accountDto.createdAt = ormAccount.created_at;
            accountDto.createdBy = ormAccount.created_by;
            accountDto.updatedAt = ormAccount.updated_at;
            accountDto.updatedBy = ormAccount.updated_by;
            return accountDto;
        });
        return accounts;
    }
};
GetAccountsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_accounts_query_1.GetAccountsQuery),
    __metadata("design:paramtypes", [])
], GetAccountsHandler);
exports.GetAccountsHandler = GetAccountsHandler;
//# sourceMappingURL=get-accounts.handler.js.map