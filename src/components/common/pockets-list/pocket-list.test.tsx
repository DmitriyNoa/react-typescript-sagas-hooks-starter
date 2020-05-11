import React from "react";
import { IPocket } from "../../../lib/interfaces/Pocket";
import { shallow } from "enzyme";
import { PocketsList } from "./pockets-list";
import { Pocket } from "../pocket/pocket";

describe("PocketList", () => {
    const pockets: IPocket[] = [{
        displayName: "Batman pocket",
        id: "test",
        balance: 10000,
        currency: {
            code: "EUR",
            displayName: "EUR"
        }
    },
        {
            displayName: "Superman pocket",
            id: "test",
            balance: 10000000000,
            currency: {
                code: "GPB",
                displayName: "GPB"
            }
        }
    ];

    it("should render pocket list", () => {
        const list = shallow(<PocketsList pockets={pockets} />);
        expect(list.find(Pocket).length).toBe(pockets.length);
    });
});