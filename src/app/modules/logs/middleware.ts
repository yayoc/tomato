import { Store } from "redux";
import localforage from "localforage";
import { actions } from "./actions";
import { Session, SessionType } from "./reducer";
import { LOAD_REQUEST, SET, UPDATE, DELETE_ALL } from "./types";
import { ActionsUnion } from "../../../utils";
import { createNotification } from "../../utils";

const KEY_NAME = "sessions";

export const loadSessionsMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === LOAD_REQUEST) {
    localforage.getItem<Session[]>(KEY_NAME).then((sessions: Session[]) => {
      store.dispatch(actions.loadSuccess(sessions || []));
    });
  }
  return next(action);
};

export const setSessionMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === SET) {
    const { sessions } = store.getState().logs;
    localforage.setItem(KEY_NAME, [...sessions, action.payload]);
    // Create a notification
    if (action.payload.type === SessionType.Work) {
      createNotification("Take a break");
    } else {
      createNotification("Time to work");
    }
  }
  return next(action);
};

export const updateSessionMiddleware = (store: Store) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === UPDATE) {
    const { sessions } = store.getState().logs;
    localforage.setItem(KEY_NAME, sessions);
  }
  return next(action);
};

export const deleteAllMiddleware = () => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === DELETE_ALL) {
    localforage.setItem(KEY_NAME, []);
  }
  return next(action);
};
