import { getCurrenciesList } from "./currencies";
import {ICurrency} from "../lib/interfaces/Currency";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_CURRENCIES_SUCCESS} from "../actions/currencies";

export const rootSaga = function* root() {
    yield getCurrenciesList();
};