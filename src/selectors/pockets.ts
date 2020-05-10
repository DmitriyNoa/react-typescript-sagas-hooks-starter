import { IAppState } from "../reducers";
import { IPocket } from "../lib/interfaces/Pocket";

export const pocketsSelector = (state: IAppState): IPocket[] => state.pockets.sort((a: IPocket , b: IPocket) => {
    if (a.currency.code > b.currency.code) {
        return 1;
    }
    if (b.currency.code  > a.currency.code) {
        return -1;
    }
    return 0;
});