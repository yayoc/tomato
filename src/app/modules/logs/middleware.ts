import { Store } from "redux";
import localforage from "localforage";
import { actions } from "./actions";
import { Session } from "./reducer";
import {
  LOAD_SESSIONS_REQUEST,
  SET_WORK_SESSION,
  SET_BREAK_SESSION,
  UPDATE_WORK_SESSION_NOTE,
  DELETE_ALL_LOGS
} from "./types";
import { ActionsUnion } from "../../../utils";
import { createNotification } from "../../utils";

export const loadSessionsMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === LOAD_SESSIONS_REQUEST) {
    localforage
      .getItem<Session[]>("works")
      .then((works: Session[]) =>
        store.dispatch(actions.loadSessionsSuccess(works, []))
      )
      .catch(() => {
        store.dispatch(actions.loadSessionsFailed());
      });

    localforage
      .getItem<Session[]>("breaks")
      .then((breakSessions: Session[]) =>
        store.dispatch(actions.loadSessionsSuccess([], breakSessions))
      )
      .catch(() => {
        store.dispatch(actions.loadSessionsFailed());
      });
  }
  return next(action);
};

export const setWorkSessionMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === SET_WORK_SESSION) {
    const { works } = store.getState().logs;
    localforage.setItem("works", [...works, action.payload]);
    // notify taking a break
    createNotification("Take a break");
  }
  return next(action);
};

export const setBreakSessionMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === SET_BREAK_SESSION) {
    const { breaks } = store.getState().logs;
    localforage.setItem("breaks", [...breaks, action.payload]);
    // notify starting a work
    createNotification("Time to work");
  }
  return next(action);
};

export const updateWorkSessionNoteMiddleware = (store: Store) => (
  next: any
) => (action: ActionsUnion<typeof actions>) => {
  if (action.type === UPDATE_WORK_SESSION_NOTE) {
    const { works } = store.getState().logs;
    localforage.setItem("works", works);
  }
  return next(action);
};

export const deleteAllLogsMiddleware = () => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === DELETE_ALL_LOGS) {
    localforage.setItem("works", []);
    localforage.setItem("breaks", []);
  }
  return next(action);
};
