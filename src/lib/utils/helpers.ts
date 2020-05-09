import { ICurrency } from "../interfaces/Currency";
import { IPocket } from "../interfaces/Pocket";
import { v4 as uuidv4 } from "uuid";

function addPocket(balance: number = 0, currency: ICurrency, displayName?: string): IPocket {
    return {
        id: uuidv4(),
        balance,
        currency,
        displayName
    }
}

export {
    addPocket,
}
