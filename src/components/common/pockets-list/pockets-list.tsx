import React from "react";
import { Pocket } from "../pocket/pocket";
import { cx } from "emotion";
import { pocketsListStyles } from "./pockets-list.css";

interface IPocketsListProps {
    pockets: any[]
}

export const PocketsList: React.FC<IPocketsListProps> = ({ pockets }) => {
    const pocketsList = pockets.map((pocket: any) => {
        return <li key={pocket.id}><Pocket pocket={pocket} /></li>
    });
    return  (
        <ul className={cx(pocketsListStyles.root)}>
            {pocketsList}
        </ul>
    )
};
