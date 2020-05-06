import { createAction, ActionType } from "typesafe-actions";
import { IPocket } from "../lib/interfaces/Pocket";
import { CONSTANTS } from "../constants";

export const ADD = createAction(CONSTANTS.ACTIONS.POCKETS.ADD)<IPocket>();
export type ADD_TYPE = ActionType<typeof ADD>;