import { CustomerRegistered } from './customer-registered.event';
export declare class PersonRegistered extends CustomerRegistered {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly dni: string;
    constructor(id: number, firstName: string, lastName: string, dni: string);
}
