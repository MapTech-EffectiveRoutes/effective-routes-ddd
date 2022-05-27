export declare class IdNumber {
    protected readonly value: number;
    protected constructor(value: number);
    static of(value: number): IdNumber;
    getValue(): number;
}
