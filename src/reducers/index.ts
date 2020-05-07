import { combineReducers } from 'redux';
import { pocketsReducer } from "./pockets.reducer";
import { IPocket } from "../lib/interfaces/Pocket";
import { ICurrency } from "../lib/interfaces/Currency";
import {currenciesReducer} from "./currencies.reducer";

export interface State {
    pockets: IPocket[];
    currencies: ICurrency[];
}

export const rootReducers = combineReducers<State>({
    pockets: pocketsReducer,
    currencies: currenciesReducer,
});