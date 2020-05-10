import {createAsyncAction} from "typesafe-actions";
import {CONSTANTS} from "../constants";
import {ExchangeRate} from "../lib/interfaces/Currency";
import {Transaction} from "../lib/interfaces/Transaction";

export const getExchangeRateAsync  = createAsyncAction(
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_REQUEST,
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_SUCCESS,
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_FAILURE
)<string, ExchangeRate, Error>();

/**
 * @note Usually real exchange will be processed on API side.
 * Let's use async action to simulate requests.
 */
export const exchangeAsync  = createAsyncAction(
    CONSTANTS.ACTIONS.EXCHANGE.EXCHANGE_REQUEST,
    CONSTANTS.ACTIONS.EXCHANGE.EXCHANGE_SUCCESS,
    CONSTANTS.ACTIONS.EXCHANGE.EXCHANGE_FAILURE
)<Transaction, Transaction, Error>();
