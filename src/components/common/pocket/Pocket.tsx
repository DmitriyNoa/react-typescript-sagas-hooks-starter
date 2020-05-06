import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { cx } from "emotion";
import { pocketStyles } from "./Pocket.css";

interface IPocketProps {
    pocket: IPocket
}

export const Pocket = ({pocket}: IPocketProps) => {
    return (
        <div className={cx(pocketStyles.root)}>
            <div className={cx(pocketStyles.pocketName)}>{pocket.displayName || pocket.currency.code}</div>
            <div className={cx(pocketStyles.pocketBalance)}>{pocket.balance}</div>
        </div>
    )
}