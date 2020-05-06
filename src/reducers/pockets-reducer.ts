import { IPocket } from "../lib/interfaces/Pocket";
import { ADD, ADD_TYPE } from "../actions";
import { getType } from "typesafe-actions";

// initialize default pockets as per requirements: EUR, GBP, USD
const pocketsInitialState: IPocket[] = [];

export const pocketsReducer = (state: IPocket[] = pocketsInitialState, action: ADD_TYPE) => {
    switch (action.type) {
        case getType(ADD): {
            const newState = [...state];
            state.push(action.payload);
            return newState;
        }
        default:
            return state;
    }
}
