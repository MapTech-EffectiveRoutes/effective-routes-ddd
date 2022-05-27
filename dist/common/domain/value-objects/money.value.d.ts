export declare class Money {
    private readonly amount;
    private readonly currency;
    private constructor();
    static create(amount: number, currency: string): Money;
    add(other: Money): Money;
    subtract(other: Money): Money;
    private newMoney;
    getAmount(): number;
    getCurrency(): string;
}
