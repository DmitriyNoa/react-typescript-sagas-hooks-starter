import { IAppState } from "../reducers";
import { IPocket } from "../lib/interfaces/Pocket";

export const pocketsSelector = (state: IAppState): IPocket[] => state.pockets;