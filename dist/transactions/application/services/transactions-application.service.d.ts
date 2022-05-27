import { CommandBus } from '@nestjs/cqrs';
import { AppNotification } from 'src/common/application/app.notification';
import { Result } from 'typescript-result';
import { DepositMoneyValidator } from '../validators/deposit-money.validator';
import { TransferMoneyValidator } from '../validators/transfer-money.validator';
import { WithdrawMoneyValidator } from '../validators/withdraw-money.validator';
import { DepositRequestDto } from '../dtos/request/deposit-request.dto';
import { DepositResponseDto } from '../dtos/response/deposit-response.dto';
import { WithdrawRequestDto } from '../dtos/request/withdraw-request.dto';
import { WithdrawResponseDto } from '../dtos/response/withdraw-response.dto';
import { TransferRequestDto } from '../dtos/request/transfer-request.dto';
import { TransferResponseDto } from '../dtos/response/transfer-response.dto';
export declare class TransactionsApplicationService {
    private commandBus;
    private depositValidator;
    private withdrawValidator;
    private transferValidator;
    constructor(commandBus: CommandBus, depositValidator: DepositMoneyValidator, withdrawValidator: WithdrawMoneyValidator, transferValidator: TransferMoneyValidator);
    deposit(depositRequestDto: DepositRequestDto): Promise<Result<AppNotification, DepositResponseDto>>;
    withdraw(withdrawRequestDto: WithdrawRequestDto): Promise<Result<AppNotification, WithdrawResponseDto>>;
    transfer(transferRequestDto: TransferRequestDto): Promise<Result<AppNotification, TransferResponseDto>>;
}
