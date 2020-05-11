import { displayBalance, addPocket } from "./helpers";
import { ICurrency } from "../interfaces/Currency";

describe("Helpers", () => {
    describe("Balance", () => {
        it('should display balance with required digits after 0 for integers', () => {
            const balance = 100;
            expect(displayBalance(balance)).toBe("100.00");
        });

        it('should display balance with required digits after 0 for floats', () => {
            const balance = 11112.099236482364823;
            expect(displayBalance(balance, 3)).toBe("11112.099");
        });
    });

    describe("Add pocket", () => {
        it('should create a pocket', () => {
            const currency: ICurrency = {
                code: "EUR",
                displayName: "EUR",

            }
            const pocketName ="Some pocket";
            const pocket = addPocket(111, currency, pocketName);

            expect(pocket.id).toBeDefined();
            expect(pocket.displayName).toBe(pocketName);
            expect(pocket.currency.code).toBe(currency.code);
        });
    });
});