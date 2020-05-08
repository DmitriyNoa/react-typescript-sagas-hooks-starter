import { ICurrency } from "./Currency";

export interface IPocket {
    currency: ICurrency;
    id: string;
    displayName?: string;
    balance: number;
}