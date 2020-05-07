import { ICurrency } from "../lib/interfaces/Currency";
import { GET_CURRENCIES_SUCCESS, GET_CURRENCIES_SUCCESS_TYPE} from "../actions/currencies";
import { getType } from "typesafe-actions";

const currenciesInitialState: ICurrency[] = [];

export const currenciesReducer = (state: ICurrency[] = currenciesInitialState, action: GET_CURRENCIES_SUCCESS_TYPE) => {
    switch (action.type) {
        case getType(GET_CURRENCIES_SUCCESS): {
            return action.payload;
        }
        default:
            return state;
    }
}
