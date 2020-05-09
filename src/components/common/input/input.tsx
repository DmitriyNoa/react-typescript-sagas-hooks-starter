import React from "react";
import { IMaskInput } from "react-imask";
import { cx } from "emotion";
import { inputStyles } from "./input.css";

interface InputProps {
    onChange: (value: string) => void;
    max?: number;
    value?: string;
}

export const Input = ({ onChange, max, value }: InputProps) => {
    return (
        <IMaskInput
            className={cx(inputStyles.root)}
            value={value}
            mask={Number}
            max={max}
            scale={2}
            signed={false}
            thousandsSeparator={' '}
            padFractionalZeros={true}
            normalizeZeros={true}
            radix={"."}
            mapToRadix={['.']}
            onAccept={onChange}
        />
    )
}