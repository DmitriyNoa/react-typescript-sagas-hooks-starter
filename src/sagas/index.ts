import { getCurrenciesList } from "./currencies";
import { generateDefaultPockets } from "./pockets";

export const rootSaga = function* root() {
    const currencies = yield getCurrenciesList();
    yield generateDefaultPockets(currencies);
};