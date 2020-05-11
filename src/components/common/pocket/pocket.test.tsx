import React from "react";
import { mount } from "enzyme";
import { Pocket } from "./pocket";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { ICurrency } from "../../../lib/interfaces/Currency";
import { displayBalance } from "../../../lib/utils/helpers";

describe("Pocket", ()=> {
    it('should render a pocket', () => {
        const currency: ICurrency = {
            code: "EUR",
            displayName: "EUR",
        }
        const pocket: IPocket = {
            id: "test",
            balance: 222,
            currency: currency,
            displayName: "Awesome pocket",
        }
        const pocketWrapper = mount(<Pocket pocket={pocket} />);

        expect(pocketWrapper.find('[data-testid="pocketName"]').text()).toBe(pocket.displayName);
        expect(pocketWrapper.find('[data-testid="pocketBalance"]').text()).toBe(`You have: ${displayBalance(pocket.balance)} ${pocket.currency.code}`);
    });

    it('should render a pocket with currency code if no pocket name provided', () => {
        const currency: ICurrency = {
            code: "EUR",
            displayName: "EUR",
        }
        const pocket: IPocket = {
            id: "test",
            balance: 222,
            currency: currency
        }
        const pocketWrapper = mount(<Pocket pocket={pocket} />);

        expect(pocketWrapper.find('[data-testid="pocketName"]').text()).toBe(pocket.currency.displayName);
    });
})
