import React from "react";
import { cx } from "emotion";
import { pocketStyles } from "./pocket.css";

interface IPocketProps {
    pocket: any
}

export const Pocket: React.FC<IPocketProps> = ({pocket}) => {
    return (
        <div className={cx(pocketStyles.root)}>
            <div className={cx(pocketStyles.pocketName)} data-testid="pocketName">{pocket.displayName || pocket.currency.displayName}</div>
        </div>
    )
}
