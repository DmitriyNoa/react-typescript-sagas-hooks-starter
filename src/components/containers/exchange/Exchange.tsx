import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { PocketsList } from "../../common/pockets-list/pockets-list";
import { pocketsSelector } from "../../../selectors/pockets";
import { cx } from "emotion";
import { exchangeStyles } from "./exchange.css";
import { Input } from "../../common/input/input";
import {IPocket} from "../../../lib/interfaces/Pocket";

type PocketsExchange = {
    fromPocket: IPocket | null;
    toPocket:  IPocket | null;
}

export const Exchange = () => {
    const pockets = useSelector(pocketsSelector);
    console.log(pockets);
    // let's set some default pockets to exchange
    const [exchange, setExchange] = useState<PocketsExchange>({fromPocket: pockets[0], toPocket: pockets[1]});
    console.log(exchange.fromPocket);

    useEffect(() => {
        setExchange({fromPocket: pockets[0], toPocket: pockets[1]});
    }, pockets);
    
    return (
        <div className={cx(exchangeStyles.root)}>
            <div className={cx(exchangeStyles.userPockets)}>
                <h2>Your pockets</h2>
                <PocketsList pockets={pockets}  />
            </div>
            <div className={cx(exchangeStyles.currenciesExchange)}>
                <h2>Exchange</h2>

                <div>
                    <h3>From: {exchange.fromPocket?.currency.code}</h3>
                    <Input onChange={(val) => { console.log(val); }} value={""} max={exchange.fromPocket?.balance} />
                </div>
                <div>
                    <h3>To: {exchange.toPocket?.currency.code}</h3>
                    <Input onChange={(val) => { console.log(val); }} value={""} />
                </div>
            </div>
        </div>
    );
}