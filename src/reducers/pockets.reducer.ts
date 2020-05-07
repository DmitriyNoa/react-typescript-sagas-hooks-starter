import { IPocket } from "../lib/interfaces/Pocket";
import { ADD_POCKET, ADD_POCKET_TYPE} from "../actions/pockets";
import { getType } from "typesafe-actions";

// initialize default pockets as per requirements: EUR, GBP, USD
const pocketsInitialState: IPocket[] = [];

export const pocketsReducer = (state: IPocket[] = pocketsInitialState, action: ADD_POCKET_TYPE) => {
    switch (action.type) {
        case getType(ADD_POCKET): {
            const newState = [...state];
            state.push(action.payload);
            return newState;
        }
        default:
            return state;
    }
}
