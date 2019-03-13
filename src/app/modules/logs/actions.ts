import { createAction } from "../../../utils";
import { actionTypes } from "./types";
import { Session } from "./reducer";

export const actions = {
  setWork: (workSession: Session) =>
    createAction(actionTypes.SET_WORK_SESSION, workSession),
  setBreak: (breakSession: Session) =>
    createAction(actionTypes.SET_BREAK_SESSION, breakSession)
};
