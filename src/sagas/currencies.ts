import { get } from "../lib/utils/http-client";
import { CurrencyResponse, ICurrency } from "../lib/interfaces/Currency";
import { CONSTANTS } from "../constants";
import { put } from 'redux-saga/effects';
import { getCurrenciesAsync } from "../actions/currencies";

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
export {
    getCurrenciesList,
}
