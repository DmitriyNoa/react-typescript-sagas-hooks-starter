import React from "react";
import {useSelector} from 'react-redux';
import {cx} from "emotion";
import {exchangeStyles} from "./main.css";
import {CharacterList} from "../../common/character-list/character-list";
import {charactersSelector} from "../../../selectors/characters";

export const Main: React.FC = () => {
    const characters = useSelector(charactersSelector);

    return (
        <div className={cx(exchangeStyles.root)}>
            <CharacterList characters={characters} />
        </div>
    );
}
