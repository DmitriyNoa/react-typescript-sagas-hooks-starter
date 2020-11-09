import { get } from "../lib/utils/http-client";
import { CONSTANTS } from "../constants";
import { put } from 'redux-saga/effects';
import {getCharactersAsync} from "../actions/currencies";
import {HttpResponse} from "../lib/interfaces/Common";

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

function* getCurrenciesList(): Generator<any, ICharacter[] | undefined, HttpResponse<ICharacter>> {
    try {
        const characters = yield get<ICharacter[]>(CONSTANTS.URLS.CHARACTERS);
        yield put(getCharactersAsync.success(characters.results));
        return [];
    } catch (err) {
        console.error(err);
    }
}


export {
    getCurrenciesList,
}
