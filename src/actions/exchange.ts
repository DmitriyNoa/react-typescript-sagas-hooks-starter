import { ActionType, createAction } from "typesafe-actions";
import { CONSTANTS } from "../constants";
import { ExchangeRate } from "../lib/interfaces/Currency";
import { Transaction } from "../lib/interfaces/Transaction";


export const GetExchangeRate = createAction(CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_SUCCESS)<ExchangeRate>()
export type GetExchangeRateType = ActionType<typeof GetExchangeRate>;
/**
 * @note Usually real exchange will be processed on API side.
 * Let's use async action to simulate requests.
 */

export const TransactionAction = createAction(CONSTANTS.ACTIONS.EXCHANGE.EXCHANGE_SUCCESS)<undefined, Transaction>();
export type TransactionType = ActionType<typeof TransactionAction>;

export const Exchange = createAction(CONSTANTS.ACTIONS.EXCHANGE.EXCHANGE_SUCCESS)<ExchangeRate>();
