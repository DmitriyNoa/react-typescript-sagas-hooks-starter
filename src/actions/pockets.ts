import { createAction } from "typesafe-actions";
import { IPocket } from "../lib/interfaces/Pocket";
import { CONSTANTS } from "../constants";
import {ActionType} from "typesafe-actions";

export const ADD_POCKET = createAction(CONSTANTS.ACTIONS.POCKETS.ADD)<IPocket[], unknown>();
export type AddPocket = ActionType<typeof ADD_POCKET>;