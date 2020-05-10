export interface ICurrency {
    code: string;
    displayName: string;
}
export type CurrencyResponse = {
    [code: string]: string
}
export type ExchangeRate = {
    disclaimer: string;
    license: string;
    timestamp: number;
    base: string;
    rates: CurrencyResponse;
}