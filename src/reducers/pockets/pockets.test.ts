import { pockets } from "./pockets";
import {ADD_POCKET, AddPocket} from "../../actions/pockets";
import {CONSTANTS} from "../../constants";

describe("PocketsReducer", () => {
    it("should create pocket", () => {
        const action = {
            type: CONSTANTS.ACTIONS.POCKETS.ADD,
            meta: undefined,
            payload: [
                {
                    displayName: "My pocket",
                    balance: 1000,
                    id: "11111",
                    currency: {
                        code: "EUR",
                        displayName: "EUR"
                    }
                }
            ]
        }
        const pocketsState = pockets([], action);
        expect(pocketsState.length).toBe(action.payload.length);
    });
});