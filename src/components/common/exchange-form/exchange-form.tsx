import React from "react";
import {cx} from "emotion";
import {IOption, Select} from "../select/select";
import {IInputProps, Input} from "../input/input";
import {exchangeFormStyles} from "./exchange-form.css";
import {IPocket} from "../../../lib/interfaces/Pocket";

interface IExchangeFormProps {
    pocket: IPocket;
    selectOptions: IOption[];
    selectedDisabled: boolean;
    onSelect: (val: string) => {};
    input: IInputProps;
}

export const ExchangeForm: React.FC<IExchangeFormProps> = ({pocket, selectOptions, onSelect, input, selectedDisabled}) => {
    return (
        <div className={cx(exchangeFormStyles.root)}>
            <Select disabled={selectedDisabled}
                    label={"From:"}
                    options={selectOptions}
                    name={'fromPocket'}
                    id={"fromPocket"}
                    selected={pocket.id}
                    onChange={onSelect}/>
            <Input onChange={input.onChange}
                   value={input.value}
                   max={pocket.balance}/>
        </div>
    );
}