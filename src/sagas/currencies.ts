import { get } from "../lib/utils/http-client";
import { ICurrency } from "../lib/interfaces/Currency";
import { CONSTANTS } from "../constants";
import { put, call } from 'redux-saga/effects';
import {GET_CURRENCIES_SUCCESS, getCurrenciesAsync} from "../actions/currencies";

function* getCurrenciesList(): Generator<any, void, ICurrency[]> {
    try {
        const currencies = yield call(get, CONSTANTS.URLS.CURRENCIES);

        yield put(getCurrenciesAsync.success(currencies));
    } catch (err) {
        console.error(err);
    }
}
export {
    getCurrenciesList,
}
