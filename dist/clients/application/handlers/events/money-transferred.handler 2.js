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
exports.MoneyTransferredHandler = void 0;
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
const money_transferred_event_1 = require("../../../../transactions/domain/events/money-transferred.event");
let MoneyTransferredHandler = class MoneyTransferredHandler {
    constructor() { }
    async handle(event) {
        console.log('Clients BC - handle MoneyTransferred');
    }
};
MoneyTransferredHandler = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(money_transferred_event_1.MoneyTransferred),
    __metadata("design:paramtypes", [])
], MoneyTransferredHandler);
exports.MoneyTransferredHandler = MoneyTransferredHandler;
//# sourceMappingURL=money-transferred.handler.js.map