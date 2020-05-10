import {createAsyncAction, ActionType} from "typesafe-actions";
import {CONSTANTS} from "../constants";
import {ExchangeRate} from "../lib/interfaces/Currency";

export const getExchangeRateAsync  = createAsyncAction(
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_REQUEST,
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_SUCCESS,
    CONSTANTS.ACTIONS.CURRENCIES.GET_EXCHANGE_RATE_FAILURE
)<string, ExchangeRate, Error>();

export type ExchangeAction = ActionType<typeof getExchangeRateAsync.request>;