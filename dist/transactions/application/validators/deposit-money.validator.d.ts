import { AppNotification } from 'src/common/application/app.notification';
import { Repository } from 'typeorm';
import { DepositRequestDto } from '../dtos/request/deposit-request.dto';
import { AccountTypeORM } from '../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
export declare class DepositMoneyValidator {
    private accountRepository;
    constructor(accountRepository: Repository<AccountTypeORM>);
    validate(depositRequestDto: DepositRequestDto): Promise<AppNotification>;
}
