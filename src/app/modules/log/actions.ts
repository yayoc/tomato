import { createAction } from "../../../utils";
import { actionTypes } from "./types";

export const actions = {
  done: (id: string) => createAction(actionTypes.DONE, id)
};
