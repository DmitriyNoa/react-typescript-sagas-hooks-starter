import { IAppState } from "../reducers";
import { ExchangeRate } from "../lib/interfaces/Currency";

export const exchangeSelector = (state: IAppState): ExchangeRate => state.exchange;