import { ICurrency } from "../../lib/interfaces/Currency";
import { GET_CURRENCIES_SUCCESS_TYPE, getCurrenciesAsync} from "../../actions/currencies";
import { getType } from "typesafe-actions";

const currenciesInitialState: ICurrency[] = [];

export const currencies = (state: ICurrency[] = currenciesInitialState, action: GET_CURRENCIES_SUCCESS_TYPE) => {
    switch (action.type) {
        case getType(getCurrenciesAsync.success): {
            return action.payload;
        }
        default:
            return state;
    }
}
