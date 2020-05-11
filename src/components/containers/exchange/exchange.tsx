import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {PocketsList} from "../../common/pockets-list/pockets-list";
import {pocketsSelector} from "../../../selectors/pockets";
import {cx} from "emotion";
import {exchangeStyles} from "./exchange.css";
import {Input} from "../../common/input/input";
import {IPocket} from "../../../lib/interfaces/Pocket";
import {IOption, Select} from "../../common/select/select";
import {END_POLL_WATCHER, START_POLL_WATCHER} from "../../../actions/currencies";
import {exchangeSelector} from "../../../selectors/exchange";
import {TransactionAction} from "../../../actions/exchange";
import {Transaction} from "../../../lib/interfaces/Transaction";
import {displayBalance} from "../../../lib/utils/helpers";
import {Button} from "../../common/button/button";

type PocketsExchange = {
    fromPocket: IPocket | null;
    toPocket: IPocket | null;
}

export const Exchange: React.FC = () => {
    // get user pockets from the store.
    const pockets = useSelector(pocketsSelector);
    // get the exchange exchange currency rates.
    const exchangeCurrency = useSelector(exchangeSelector);

    // let's set some default pockets to exchange
    const [exchange, setExchange] = useState<PocketsExchange>({fromPocket: pockets[0], toPocket: pockets[1]});
    // set options lists for select component options
    const [options, setOptions] = useState<IOption[]>([]);

    // set a holder for user input value
    const [changeValue, setChangeValue] = useState<string>();
    const [changeResultValue, setChangeResultValue] = useState<string>();

    // set initial transaction
    const [transaction, setTransaction] = useState<Transaction>({fromWallet: "", toWallet: "", value: 0, rate: 1});

    const dispatch = useDispatch();

    // watch for pockets changes
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

    // watch for the input changes. Pre calculate possible exchange result for the user
    useEffect(() => {
        const toCurrency = exchange.toPocket?.currency.code;
        const rate = exchangeCurrency.base && toCurrency ? exchangeCurrency.rates[toCurrency] : 1;
        const exchangeValue = changeValue ? (parseFloat(changeValue) * rate) : 0;
        const value = changeValue ? parseFloat(changeValue) : 0;
        setChangeResultValue(exchangeValue.toString());

        if (exchange.fromPocket && exchange.toPocket) {
            setTransaction({
                fromWallet: exchange.fromPocket.id,
                toWallet: exchange.toPocket.id,
                value,
                rate
            });
        }
    }, [changeValue, exchangeCurrency, exchange]);

    // Start polling current the base currency rates and watch for the base currency change.
    useEffect(() => {
        if (exchange && exchange.fromPocket) {
            dispatch(END_POLL_WATCHER());
            dispatch(START_POLL_WATCHER(exchange.fromPocket.currency.code));
        }
    }, [exchange, dispatch])


    return (
        <div className={cx(exchangeStyles.root)}>
            <div className={cx(exchangeStyles.userPockets)}>
                <h2>Your pockets</h2>
                <PocketsList pockets={pockets}/>
            </div>
            <div className={cx(exchangeStyles.currenciesExchange)}>
                <h2>Exchange
                    <span className={cx(exchangeStyles.rate)}>
                        {exchange.fromPocket &&
                         exchange.toPocket &&
                        ` 1 ${exchange.fromPocket?.currency.code} = ${displayBalance(exchangeCurrency.rates[exchange.toPocket?.currency.code])} ${exchange.toPocket?.currency.code}`}
                    </span>
                </h2>
                <div>
                    <div className={cx(exchangeStyles.exchangeForm)}>
                        <Select disabled={exchange.toPocket?.id}
                                label={"From:"}
                                options={options}
                                name={'fromPocket'}
                                id={"fromPocket"}
                                selected={exchange.fromPocket?.id}
                                onChange={(val: string) => {
                                    setExchange({
                                        fromPocket: pockets.find(pocket => pocket.id === val) || null,
                                        toPocket: exchange.toPocket
                                    })
                                }}
                        />
                        <Input onChange={(val) => {
                                setChangeValue(val);
                            }}
                               value={changeValue}
                               max={exchange.fromPocket?.balance}/>
                    </div>
                    <div className={cx(exchangeStyles.exchangeForm)}>
                        <Select disabled={exchange.fromPocket?.id}
                                label={"To:"}
                                options={options}
                                name={'toPocket'}
                                id={"toPocket"}
                                selected={exchange.toPocket?.id}
                                onChange={(val: string) => {
                                    setExchange({
                                        fromPocket: exchange.fromPocket,
                                        toPocket: pockets.find(pocket => pocket.id === val) || null
                                    })
                        }}/>
                        <Input disabled={true}
                               onChange={(val) => {}}
                               value={changeResultValue}/>
                    </div>
                    <div>
                        <Button text={"exchange"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(TransactionAction(undefined, transaction));
                                    setChangeValue("0");
                                 }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}