import { GET_CURRENCIES_SUCCESS_TYPE, getCharactersAsync} from "../../actions/characters";
import { getType } from "typesafe-actions";
import {ICharacter} from "../../sagas/currencies";

const currenciesInitialState: ICharacter[] = [];

export const characters = (state: ICharacter[] = currenciesInitialState, action: GET_CURRENCIES_SUCCESS_TYPE) => {
    switch (action.type) {
        case getType(getCharactersAsync.success): {
            return action.payload;
        }
        default:
            return state;
    }
}
