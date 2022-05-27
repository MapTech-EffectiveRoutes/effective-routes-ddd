import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { OpenAccount } from '../../commands/open-account.command';
import { AccountTypeORM } from '../../../infrastructure/persistence/typeorm/entities/account.typeorm';
export declare class OpenAccountHandler implements ICommandHandler<OpenAccount> {
    private accountRepository;
    private publisher;
    constructor(accountRepository: Repository<AccountTypeORM>, publisher: EventPublisher);
    execute(command: OpenAccount): Promise<number>;
}
