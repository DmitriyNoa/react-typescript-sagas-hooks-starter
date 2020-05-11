import { combineReducers } from 'redux';
import { pockets } from "./pockets/pockets";
import { IPocket } from "../lib/interfaces/Pocket";
import { ExchangeRate, ICurrency } from "../lib/interfaces/Currency";
import { currencies } from "./currencies/currencies";
import { exchange } from "./exchange/exchange";

export interface IAppState {
    pockets: IPocket[];
    currencies: ICurrency[];
    exchange: ExchangeRate;
}

export const rootReducers = combineReducers<IAppState>({
    pockets: pockets,
    currencies: currencies,
    exchange: exchange,
});