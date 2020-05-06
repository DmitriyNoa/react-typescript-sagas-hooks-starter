import { ICurrency } from "./Currency";

export interface IPocket {
    currency: ICurrency;
    id: number;
    displayName?: string;
    balance: number;
}