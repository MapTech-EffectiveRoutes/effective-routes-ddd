import { IEventHandler } from '@nestjs/cqrs';
import { PersonRegistered } from '../../../domain/events/person-registered.event';
export declare class PersonRegisteredHandler implements IEventHandler<PersonRegistered> {
    constructor();
    handle(event: PersonRegistered): void;
}
