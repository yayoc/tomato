import { createAction } from "../../../utils";
import { actionTypes } from "./types";
import { Work } from "./reducer";

export const actions = {
  setWork: (work: Work) => createAction(actionTypes.SET_WORK_ENTITY, work)
};
