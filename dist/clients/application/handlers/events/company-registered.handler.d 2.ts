import { IEventHandler } from '@nestjs/cqrs';
import { CompanyRegistered } from '../../../domain/events/company-registered.event';
export declare class CompanyRegisteredHandler implements IEventHandler<CompanyRegistered> {
    constructor();
    handle(event: CompanyRegistered): void;
}
