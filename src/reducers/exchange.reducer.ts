import {ExchangeRate} from "../lib/interfaces/Currency";
import {getExchangeRateAsync} from "../actions/exchange";
import {getType} from "typesafe-actions";

export const initialExchangeState: ExchangeRate = {
    disclaimer: "",
    license: "",
    timestamp: 0,
    base: "",
    rates: {},
}

export const exchangeReducer = (state: ExchangeRate = initialExchangeState, action: any) => {
    switch (action.type) {
        case getType(getExchangeRateAsync.success): {
            return action.payload;
        }
        default:
            return state;
    }
}
