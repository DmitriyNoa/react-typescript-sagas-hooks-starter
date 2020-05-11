import React from "react";
import { shallow } from "enzyme";
import { Pocket } from "./pocket";
import {IPocket} from "../../../lib/interfaces/Pocket";
import {ICurrency} from "../../../lib/interfaces/Currency";

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
        }
        const pocketWrapper = shallow(<Pocket pocket={pocket} />);

        expect(pocketWrapper.find("div").length).toBe(3);
    });
})
