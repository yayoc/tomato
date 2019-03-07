import { createAction } from "../../../utils";
import { actionTypes } from "./types";
import { State } from "./reducer";

export const actions = {
  saveSetting: (setting: State) =>
    createAction(actionTypes.SAVE_SETTING, setting)
};
