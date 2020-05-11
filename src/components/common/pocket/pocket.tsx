import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { cx } from "emotion";
import { pocketStyles } from "./pocket.css";
import { displayBalance } from "../../../lib/utils/helpers";

interface IPocketProps {
    pocket: IPocket
}

export const Pocket: React.FC<IPocketProps> = ({pocket}) => {
    return (
        <div className={cx(pocketStyles.root)}>
            <div className={cx(pocketStyles.pocketName)} data-testid="pocketName">{pocket.displayName || pocket.currency.displayName}</div>
            <div className={cx(pocketStyles.pocketBalance)} data-testid="pocketBalance">You have: {displayBalance(pocket.balance)} {pocket.currency.code}</div>
        </div>
    )
}