import React from "react";
import { cx } from "emotion";
import { pocketStyles } from "./character.css";

interface ICharacterProps {
    character: any
}

export const Character: React.FC<ICharacterProps> = ({character}) => {
    return (
        <div className={cx(pocketStyles.root)}>
            <div className={cx(pocketStyles.pocketName)} data-testid="pocketName">{character.name}</div>
        </div>
    )
}
