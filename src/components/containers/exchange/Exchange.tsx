import React from "react";
import { useSelector } from 'react-redux';
import { IAppState } from "../../../reducers";
import { PocketsList } from "../../common/pockets-list/pockets-list";

export const Exchange = () => {
    const currencies = useSelector((state: IAppState) => state.currencies);
    const pockets = useSelector((state: IAppState) => state.pockets);
    console.log(currencies);
    return (
        <div>
            <div><PocketsList pockets={pockets}  /></div>
        </div>
    );
}