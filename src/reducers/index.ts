import { combineReducers } from 'redux';
import { characters } from "./characters/characters";
import {ICharacter} from "../sagas/currencies";

export interface IAppState {
    characters: ICharacter[];
}

export const rootReducers = combineReducers<IAppState>({
    characters,
});
