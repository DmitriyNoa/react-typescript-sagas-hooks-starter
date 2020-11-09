import React from "react";
import { Character } from "../character/character";
import { cx } from "emotion";
import { pocketsListStyles } from "./character-list.css";
import {ICharacter} from "../../../sagas/currencies";

interface IPocketsListProps {
    characters: ICharacter[]
}

export const CharacterList: React.FC<IPocketsListProps> = ({ characters }) => {
    const pocketsList = characters.map((character: any) => {
        return <li key={character.id}><Character character={character} /></li>
    });
    return  (
        <ul className={cx(pocketsListStyles.root)}>
            {pocketsList}
        </ul>
    )
};
