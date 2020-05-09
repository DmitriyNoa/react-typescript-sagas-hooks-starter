import { ICurrency } from "../lib/interfaces/Currency";
import { IPocket } from "../lib/interfaces/Pocket";
import { put } from "redux-saga/effects";
import { ADD_POCKET } from "../actions/pockets";
import { addPocket } from "../lib/utils/helpers";

/**
 @function generateDefaultPockets a mock function to generate user pockets. In production this will
 * most likely get some data from the API.
 * @param currencies array
 */
function* generateDefaultPockets(currencies: ICurrency[]) {
    // by the requirements user should have 3 pockets with the following currencies.
    const defaultPocketCurrencyCodes = ["USD", "EUR", "GBP"];
    const defaultPockets: IPocket[] = [];

    defaultPocketCurrencyCodes.forEach((code) => {
        const pocketCurrency = currencies.find((currency) => {
            return currency.code === code;
        });
        if(!pocketCurrency) {
            throw new Error("Currency code error");
        }
        const pocket: IPocket = addPocket(100, pocketCurrency);
        defaultPockets.push(pocket);
    });

    yield put(ADD_POCKET(defaultPockets));
}

export {
    generateDefaultPockets
}