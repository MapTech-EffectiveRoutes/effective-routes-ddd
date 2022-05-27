import { QueryBus } from '@nestjs/cqrs';
import { TransactionsApplicationService } from '../application/services/transactions-application.service';
import { DepositRequestDto } from '../application/dtos/request/deposit-request.dto';
import { WithdrawRequestDto } from '../application/dtos/request/withdraw-request.dto';
import { TransferRequestDto } from '../application/dtos/request/transfer-request.dto';
export declare class TransactionsController {
    private readonly transactionsApplicationService;
    private readonly queryBus;
    constructor(transactionsApplicationService: TransactionsApplicationService, queryBus: QueryBus);
    deposit(depositRequestDto: DepositRequestDto, response: any): Promise<object>;
    withdraw(withdrawRequestDto: WithdrawRequestDto, response: any): Promise<object>;
    transfer(transferRequestDto: TransferRequestDto, response: any): Promise<object>;
}
