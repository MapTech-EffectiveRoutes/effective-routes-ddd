export declare class DepositResponseDto {
    readonly transactionId: number;
    readonly transactionType: string;
    readonly accountNumber: string;
    readonly amount: number;
    readonly status: string;
    readonly createdAt: string;
    constructor(transactionId: number, transactionType: string, accountNumber: string, amount: number, status: string, createdAt: string);
}
