import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { RegisterPerson } from '../../commands/register-person.command';
import { PersonTypeORM } from '../../../infrastructure/persistence/typeorm/entities/person.typeorm';
export declare class RegisterPersonHandler implements ICommandHandler<RegisterPerson> {
    private personRepository;
    private publisher;
    constructor(personRepository: Repository<PersonTypeORM>, publisher: EventPublisher);
    execute(command: RegisterPerson): Promise<number>;
}
