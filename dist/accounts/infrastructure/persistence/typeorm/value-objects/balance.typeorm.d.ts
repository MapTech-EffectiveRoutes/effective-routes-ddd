export declare class BalanceTypeORM {
    balance: number;
    currency: string;
    private constructor();
    static from(balance: number, currency: string): BalanceTypeORM;
}
