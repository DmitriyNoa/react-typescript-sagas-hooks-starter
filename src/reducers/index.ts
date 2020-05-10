import { combineReducers } from 'redux';
import { pocketsReducer } from "./pockets.reducer";
import { IPocket } from "../lib/interfaces/Pocket";
import {ExchangeRate, ICurrency} from "../lib/interfaces/Currency";
import {currenciesReducer} from "./currencies.reducer";
import {exchangeReducer} from "./exchange.reducer";

export interface IAppState {
    pockets: IPocket[];
    currencies: ICurrency[];
    exchange: ExchangeRate;
}

export const rootReducers = combineReducers<IAppState>({
    pockets: pocketsReducer,
    currencies: currenciesReducer,
    exchange: exchangeReducer,
});