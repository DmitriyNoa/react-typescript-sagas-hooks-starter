export interface ICurrency {
    code: string;
    displayName: string;
}
export type CurrencyResponse = {
    [code: string]: string
}