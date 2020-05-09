import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { cx } from "emotion";
import { pocketStyles } from "./pocket.css";

interface IPocketProps {
    pocket: IPocket
}

export const Pocket = ({pocket}: IPocketProps) => {
    return (
        <div className={cx(pocketStyles.root)}>
            <div className={cx(pocketStyles.pocketName)}>{pocket.displayName || pocket.currency.displayName}</div>
            <div className={cx(pocketStyles.pocketBalance)}>You have: {pocket.balance} {pocket.currency.code}</div>
        </div>
    )
}