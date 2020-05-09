import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { PocketsList } from "../../common/pockets-list/pockets-list";
import { pocketsSelector } from "../../../selectors/pockets";
import { cx } from "emotion";
import { exchangeStyles } from "./exchange.css";
import { Input } from "../../common/input/input";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { IOption, Select } from "../../common/select/select";

type PocketsExchange = {
    fromPocket?: IPocket;
    toPocket?:  IPocket;
}

export const Exchange: React.FC = () => {
    const pockets = useSelector(pocketsSelector);

    // let's set some default pockets to exchange
    const [exchange, setExchange] = useState<PocketsExchange>({fromPocket: pockets[0], toPocket: pockets[1]});
    const [options, setOptions] = useState<IOption[]>([]);
    const [changeValue, setChangeValue] = useState<string>();
    const [changeResultValue, setChangeResultValue] = useState<string>();

    useEffect(() => {
        // predefine default selected wallets for a better UX
        setExchange({fromPocket: pockets[0], toPocket: pockets[1]});

        // create currencies options list for selects
        const options = pockets.map((pocket) => {
           return {
               title: pocket.currency.displayName,
               value: pocket.id
           };
        });
        setOptions(options);
    }, [pockets]);

    useEffect(() => {
        const final = changeValue && exchange.toPocket?.balance ? parseFloat(changeValue) + exchange.toPocket.balance : 0;
        setChangeResultValue(final.toString());
    }, [changeValue]);

    return (
        <div className={cx(exchangeStyles.root)}>
            <div className={cx(exchangeStyles.userPockets)}>
                <h2>Your pockets</h2>
                <PocketsList pockets={pockets}  />
            </div>
            <div className={cx(exchangeStyles.currenciesExchange)}>
                <h2>Exchange</h2>
                <div>
                    <div>
                        <Select  disabled={exchange.toPocket?.id} label={"From:"} options={options} name={'fromPocket'} id={"fromPocket"} selected={exchange.fromPocket?.id} onChange={(val: string) => { setExchange({fromPocket: pockets.find(pocket => pocket.id === val)}) }} />
                        <Input onChange={(val) => { setChangeValue(val); }} value={changeValue} max={exchange.fromPocket?.balance} />
                    </div>
                    <div>
                        <Select disabled={exchange.fromPocket?.id} label={"To:"} options={options} name={'toPocket'} id={"toPocket"} selected={exchange.toPocket?.id} onChange={(val: string) => { console.log(val); }} />
                        <Input disabled={true} onChange={(val) => { console.log(val); }} value={changeResultValue} />
                    </div>
                    <div>
                        <button onClick={() => {}}>Let's do it</button>
                    </div>
                </div>
            </div>
        </div>
    );
}