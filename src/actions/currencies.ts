import { createAction, ActionType, createAsyncAction } from "typesafe-actions";
import { CONSTANTS } from "../constants";
import {ICharacter} from "../sagas/currencies";

export const getCharactersAsync = createAsyncAction(
    CONSTANTS.ACTIONS.CURRENCIES.GET_CURRENCIES_REQUEST,
    CONSTANTS.ACTIONS.CURRENCIES.GET_CURRENCIES_SUCCESS,
    CONSTANTS.ACTIONS.CURRENCIES.GET_CURRENCIES_FAILURE
)<string, ICharacter[], Error>();

export const GET_CURRENCIES_SUCCESS = createAction(CONSTANTS.ACTIONS.CURRENCIES.GET_CURRENCIES_SUCCESS)<ICharacter[]>();
export type GET_CURRENCIES_SUCCESS_TYPE = ActionType<typeof GET_CURRENCIES_SUCCESS>;

export const START_POLL_WATCHER = createAction(CONSTANTS.ACTIONS.CURRENCIES.START_POLL_WATCHER)<string>();
export const END_POLL_WATCHER = createAction(CONSTANTS.ACTIONS.CURRENCIES.END_POLL_WATCHER)();
