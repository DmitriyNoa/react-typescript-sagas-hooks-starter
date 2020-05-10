import { getCurrenciesList, watchPolling } from "./currencies";
import { generateDefaultPockets } from "./pockets";
import { fork } from 'redux-saga/effects';

export const rootSaga = function* root() {
    const currencies = yield getCurrenciesList();
    yield generateDefaultPockets(currencies);
    yield fork(watchPolling)
};