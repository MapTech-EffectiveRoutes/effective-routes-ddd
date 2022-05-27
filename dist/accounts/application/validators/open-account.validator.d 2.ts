import { AppNotification } from 'src/common/application/app.notification';
import { Repository } from 'typeorm';
import { AccountTypeORM } from '../../infrastructure/persistence/typeorm/entities/account.typeorm';
import { OpenAccountRequest } from '../dtos/request/open-account-request.dto';
export declare class OpenAccountValidator {
    private accountRepository;
    constructor(accountRepository: Repository<AccountTypeORM>);
    validate(openAccountRequestDto: OpenAccountRequest): Promise<AppNotification>;
}
