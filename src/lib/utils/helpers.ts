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

/**
 * @function displayBalance
 * @param [string] value A number string to display
 * @param [number] digitsNumber A number of digits to show after zero.
 * @return string
 */
function displayBalance(value: number, digitsNumber: number = 2): string {
    if(!value) return "";
    return value.toFixed(digitsNumber);
}

export {
    addPocket,
    displayBalance,
}
