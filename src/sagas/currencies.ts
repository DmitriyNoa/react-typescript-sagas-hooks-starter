import { get } from "../lib/utils/http-client";
import {CurrencyResponse, ExchangeRate, ICurrency } from "../lib/interfaces/Currency";
import { CONSTANTS } from "../constants";
import { put, call, take, race, delay } from 'redux-saga/effects';
import {END_POLL_WATCHER, getCurrenciesAsync, START_POLL_WATCHER} from "../actions/currencies";
import { config } from "../config";
import {getExchangeRateAsync} from "../actions/exchange";

function* getCurrenciesList(): Generator<any, ICurrency[] | undefined, CurrencyResponse> {
    try {
        const currencies = yield get<CurrencyResponse>(CONSTANTS.URLS.CURRENCIES);

        const currenciesArray: ICurrency[] = [];

        for(let currencyCode in currencies) {
            const currency: ICurrency = {
                code: currencyCode,
                displayName: currencies[currencyCode]
            }
            currenciesArray.push(currency);
        }

        yield put(getCurrenciesAsync.success(currenciesArray));
        return currenciesArray;
    } catch (err) {
        console.error(err);
    }
}

function* currencyRatePolling(payload: string):  Generator<any, string | number, ExchangeRate> {
    const pollingDelay = config.POLLING_INTERVAL;
    const baseCurrency = payload;
    while (true) {
        try {
            const exchange = yield get<ExchangeRate>(`${CONSTANTS.URLS.EXCHANGE}?base=${baseCurrency}&app_id=${config.API_KEY}`);
            yield put(getExchangeRateAsync.success(exchange));
            yield delay(pollingDelay);
        } catch (err) {
            yield put(getExchangeRateAsync.success(err.message));
            yield call(END_POLL_WATCHER);
        }
    }
}


function* watchPolling() {
    while (true) {
        const action = yield take(START_POLL_WATCHER);
        yield race( [call(currencyRatePolling, action.payload), take(END_POLL_WATCHER)] )
    }
}
export {
    getCurrenciesList,
    watchPolling,
}
