import { IAppState } from "../reducers";
import { ExchangeRate } from "../lib/interfaces/Currency";
import { createSelector } from "reselect";

export const exchangeSelector = (state: IAppState): ExchangeRate => state.exchange;


const rateSelector = createSelector(
    exchangeSelector,
    (exchange) => exchange.rates["EUR"]
)