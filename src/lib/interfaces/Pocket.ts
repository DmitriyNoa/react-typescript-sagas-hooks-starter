import { Currency } from "./Currency";

export interface Pocket {
    currency: Currency;
    id: number;
    displayName?: string;
    value: number;
}