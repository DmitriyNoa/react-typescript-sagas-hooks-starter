import React from "react";
import { IMaskInput } from "react-imask";
import { cx } from "emotion";
import { inputStyles } from "./input.css";

interface IInputProps {
    onChange: (value: string) => void;
    max?: number;
    value?: string;
    disabled?: boolean;
}

export const Input: React.FC<IInputProps> = ({ onChange, max, value, disabled }) => {
    return (
        <IMaskInput
            className={cx(inputStyles.root)}
            value={value}
            mask={Number}
            max={max}
            disabled={disabled}
            scale={2}
            signed={false}
            placeholder={'00.00'}
            thousandsSeparator={' '}
            padFractionalZeros={true}
            normalizeZeros={true}
            radix={"."}
            mapToRadix={['.']}
            onAccept={onChange}
        />
    )
}