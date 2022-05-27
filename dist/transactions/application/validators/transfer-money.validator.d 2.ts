import { AppNotification } from 'src/common/application/app.notification';
import { Repository } from 'typeorm';
import { AccountTypeORM } from '../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
import { TransferRequestDto } from '../dtos/request/transfer-request.dto';
export declare class TransferMoneyValidator {
    private accountRepository;
    constructor(accountRepository: Repository<AccountTypeORM>);
    validate(transferRequestDto: TransferRequestDto): Promise<AppNotification>;
}
