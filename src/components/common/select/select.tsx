import React, { ChangeEvent } from "react";
import { selectStyles } from "./select.css";
import { cx } from "emotion";

export interface IOption {
    value: string;
    title: string;
}
export interface ISelectProps {
    options: IOption[];
    name: string;
    label: string;
    id: string;
    selected?: string;
    onChange?: (value: string) => void;
    disabled?: string;
}

export const Select: React.FC<ISelectProps> = ({options, name, id, selected, onChange, label, disabled}) => {
    const optionsList = options.map((option, index) => {
        return <option disabled={disabled === option.value}  key={`option${index}`} value={option.value}>{option.title}</option>
    });

    return (
        <>
            <label className={cx(selectStyles.label)} htmlFor={id}>{label}</label>
            <select className={cx(selectStyles.root)} value={selected} name={name} id={id} onChange={(e: ChangeEvent<HTMLSelectElement>) => {onChange && onChange(e.target.value)}}>
                {optionsList}
            </select>
        </>
    );
}