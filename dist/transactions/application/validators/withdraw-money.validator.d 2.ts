import { AppNotification } from 'src/common/application/app.notification';
import { Repository } from 'typeorm';
import { AccountTypeORM } from '../../../accounts/infrastructure/persistence/typeorm/entities/account.typeorm';
import { WithdrawRequestDto } from '../dtos/request/withdraw-request.dto';
export declare class WithdrawMoneyValidator {
    private accountRepository;
    constructor(accountRepository: Repository<AccountTypeORM>);
    validate(withdrawRequestDto: WithdrawRequestDto): Promise<AppNotification>;
}
