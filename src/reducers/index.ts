import { combineReducers } from 'redux';
import { pocketsReducer } from "./pockets.reducer";
import { IPocket } from "../lib/interfaces/Pocket";
import { ICurrency } from "../lib/interfaces/Currency";
import {currenciesReducer} from "./currencies.reducer";

export interface IAppState {
    pockets: IPocket[];
    currencies: ICurrency[];
}

export const rootReducers = combineReducers<IAppState>({
    pockets: pocketsReducer,
    currencies: currenciesReducer,
});