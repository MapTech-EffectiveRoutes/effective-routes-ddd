export declare class AmountTypeORM {
    amount: number;
    currency: string;
    private constructor();
    static from(amount: number, currency: string): AmountTypeORM;
}
