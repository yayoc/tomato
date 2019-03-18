import { createAction } from "../../../utils";
import { SET, LOAD_REQUEST, UPDATE, DELETE_ALL, LOAD_SUCCESS } from "./types";
import { Session } from "./reducer";

export const actions = {
  set: (session: Session) => createAction(SET, session),
  loadRequest: () => createAction(LOAD_REQUEST),
  loadSuccess: (sessions: Session[]) => createAction(LOAD_SUCCESS, sessions),
  update: (session: Session) => createAction(UPDATE, session),
  deleteAll: () => createAction(DELETE_ALL)
};
