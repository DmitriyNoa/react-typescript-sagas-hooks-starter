import React, { MouseEvent } from "react";
import {buttonStyles} from "./button.css";
import { cx } from "emotion";

interface IButtonProps {
    onClick: (e:  MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

export const Button: React.FC<IButtonProps> = ({onClick, text}) => {
    return <button className={cx(buttonStyles.root)} onClick={onClick}>{text}</button>
}