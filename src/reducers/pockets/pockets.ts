import { IPocket } from "../../lib/interfaces/Pocket";
import { ADD_POCKET, AddPocket } from "../../actions/pockets";
import { getType } from "typesafe-actions";
import { TransactionAction, TransactionType } from "../../actions/exchange";
import { Transaction } from "../../lib/interfaces/Transaction";

// initialize default pockets as per requirements: EUR, GBP, USD
const pocketsInitialState: IPocket[] = [];

export const pockets = (state: IPocket[] = pocketsInitialState, action: AddPocket | TransactionType) => {
    switch (action.type) {
        case getType(ADD_POCKET): {
            if(!action.payload) return state;
            return [...state, ...action.payload];
        }
        case getType(TransactionAction): {
            const {fromWallet, toWallet, value, rate} = action.meta as Transaction;
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
