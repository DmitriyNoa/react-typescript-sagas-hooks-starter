import { createAction } from "typesafe-actions";
import { IPocket } from "../lib/interfaces/Pocket";
import { CONSTANTS } from "../constants";

export const ADD_POCKET = createAction(CONSTANTS.ACTIONS.POCKETS.ADD)<IPocket[]>();