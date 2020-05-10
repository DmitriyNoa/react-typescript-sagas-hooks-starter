import { IPocket } from "../lib/interfaces/Pocket";
import { ADD_POCKET } from "../actions/pockets";
import { getType } from "typesafe-actions";
import {exchangeAsync} from "../actions/exchange";

// initialize default pockets as per requirements: EUR, GBP, USD
const pocketsInitialState: IPocket[] = [];

export const pocketsReducer = (state: IPocket[] = pocketsInitialState, action: any) => {
    switch (action.type) {
        case getType(ADD_POCKET): {
            return [...state, ...action.payload];
        }
        case getType(exchangeAsync.request): {
            const {fromWallet, toWallet, value, rate} = action.payload;
            const sender = state.find((pocket) => pocket.id === fromWallet);
            const receiver = state.find((pocket) => pocket.id === toWallet);
            const rest = state.filter((pocket) => pocket.id!==fromWallet && pocket.id!==toWallet);
            const transactionValue = value * rate;
            if(sender && receiver) {
                sender.balance-=value;
                receiver.balance+=transactionValue;
                return [...rest, sender, receiver];
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}
