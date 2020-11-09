import { IAppState } from "../reducers";
import {ICharacter} from "../sagas/currencies";

export const charactersSelector = (state: IAppState): ICharacter[] => state.characters;
