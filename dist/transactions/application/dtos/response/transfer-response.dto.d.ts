export declare class TransferResponseDto {
    readonly transactionId: number;
    readonly transactionType: string;
    readonly fromAccountNumber: string;
    readonly toAccountNumber: string;
    readonly amount: number;
    readonly status: string;
    readonly createdAt: string;
    constructor(transactionId: number, transactionType: string, fromAccountNumber: string, toAccountNumber: string, amount: number, status: string, createdAt: string);
}
