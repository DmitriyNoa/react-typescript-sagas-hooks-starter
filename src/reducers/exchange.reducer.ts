import { ExchangeRate } from "../lib/interfaces/Currency";
import { GetExchangeRate, GetExchangeRateType } from "../actions/exchange";
import { getType } from "typesafe-actions";

export const initialExchangeState: ExchangeRate = {
    disclaimer: "",
    license: "",
    timestamp: 0,
    base: "",
    rates: {},
}

export const exchangeReducer = (state: ExchangeRate = initialExchangeState, action: GetExchangeRateType) => {
    switch (action.type) {
        case getType(GetExchangeRate): {
            return action.payload
        }
        default:
            return state;
    }
}
