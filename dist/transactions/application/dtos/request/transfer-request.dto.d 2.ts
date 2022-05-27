export declare class TransferRequestDto {
    readonly fromAccountNumber: string;
    readonly toAccountNumber: string;
    readonly amount: number;
    constructor(fromAccountNumber: string, toAccountNumber: string, amount: number);
}
