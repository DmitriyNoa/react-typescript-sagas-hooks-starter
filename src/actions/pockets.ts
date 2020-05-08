import { createAction, ActionType } from "typesafe-actions";
import { IPocket } from "../lib/interfaces/Pocket";
import { CONSTANTS } from "../constants";

export const ADD_POCKET = createAction(CONSTANTS.ACTIONS.POCKETS.ADD)<IPocket[]>();
export type ADD_POCKET_TYPE = ActionType<typeof ADD_POCKET>;