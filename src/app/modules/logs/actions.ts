import { createAction } from "../../../utils";
import {
  LOAD_SESSIONS_REQUEST,
  LOAD_SESSIONS_SUCCESS,
  LOAD_SESSIONS_FAILED,
  SET_WORK_SESSION,
  SET_BREAK_SESSION,
  UPDATE_WORK_SESSION_NOTE,
  DELETE_WORK_SESSION,
  DELETE_ALL_LOGS
} from "./types";
import { Session } from "./reducer";

export const actions = {
  loadSessionsRequest: () => createAction(LOAD_SESSIONS_REQUEST),
  loadSessionsSuccess: (workSessions: Session[], breakSessions: Session[]) =>
    createAction(LOAD_SESSIONS_SUCCESS, { workSessions, breakSessions }),
  loadSessionsFailed: () => createAction(LOAD_SESSIONS_FAILED),
  setWork: (workSession: Session) =>
    createAction(SET_WORK_SESSION, workSession),
  setBreak: (breakSession: Session) =>
    createAction(SET_BREAK_SESSION, breakSession),
  updateWorkSessionNote: (id: string, note: string) =>
    createAction(UPDATE_WORK_SESSION_NOTE, { id, note }),
  deleteAllLogs: () => createAction(DELETE_ALL_LOGS),
  deleteWorkSession: (id: string) => createAction(DELETE_WORK_SESSION, id)
};
