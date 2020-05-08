import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { Pocket } from "../pocket/Pocket";

interface IPocketsListProps {
    pockets: IPocket[]
}

export const PocketsList = ({ pockets }: IPocketsListProps) => {
    const pocketsList = pockets.map((pocket: IPocket) => {
        return <li key={pocket.id}><Pocket pocket={pocket} /></li>
    });
    return  (
        <ul>
            {pocketsList}
        </ul>
    )
};