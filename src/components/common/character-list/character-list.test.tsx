import React from "react";
import { shallow } from "enzyme";
import { CharacterList } from "./character-list";
import { Character } from "../character/character";
import {ICharacter} from "../../../sagas/currencies";

describe("PocketList", () => {
    const characters: ICharacter[] = [];

    it("should render pocket list", () => {
        const list = shallow(<CharacterList characters={characters} />);
        expect(list.find(Character).length).toBe(characters.length);
    });
});
