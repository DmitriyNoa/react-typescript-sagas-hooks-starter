import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {cx} from "emotion";
import {exchangeStyles} from "./main.css";

export const Main: React.FC = () => {
    return (
        <div className={cx(exchangeStyles.root)}>
            Hello
        </div>
    );
}
