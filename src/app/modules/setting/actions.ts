import { createAction } from "../../../utils";
import { SAVE_SETTING } from "./types";
import { State } from "./reducer";

export const actions = {
  saveSetting: (setting: State) => createAction(SAVE_SETTING, setting)
};
