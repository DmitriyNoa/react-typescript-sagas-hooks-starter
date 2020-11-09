import { getCurrenciesList } from "./currencies";

export const rootSaga = function* root() {
    yield getCurrenciesList();
};
