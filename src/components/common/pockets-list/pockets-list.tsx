import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { Pocket } from "../pocket/pocket";
import { cx } from "emotion";
import { pocketsListStyles } from "./pockets-list.css";

interface IPocketsListProps {
    pockets: IPocket[]
}

export const PocketsList: React.FC<IPocketsListProps> = ({ pockets }) => {
    const pocketsList = pockets.map((pocket: IPocket) => {
        return <li key={pocket.id}><Pocket pocket={pocket} /></li>
    });
    return  (
        <ul className={cx(pocketsListStyles.root)}>
            {pocketsList}
        </ul>
    )
};