import { combineReducers } from 'redux';
import { pocketsReducer } from "./pockets-reducer";
import { IPocket } from "../lib/interfaces/Pocket";

export interface State {
    pockets: IPocket[];
}

export const rootReducers = combineReducers<State>({
    pockets: pocketsReducer,
});