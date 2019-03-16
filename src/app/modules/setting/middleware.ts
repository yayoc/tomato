import localforage from "localforage";
import { State } from "./reducer";
import { actions } from "./actions";
import { ActionsUnion } from "../../../utils";
import { SAVE_SETTING, LOAD_SETTING } from "./types";

export const loadSettingMiddleware = (store: any) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === LOAD_SETTING) {
    localforage
      .getItem<State>("setting")
      .then(setting => store.dispatch(actions.saveSetting(setting)));
  }
  return next(action);
};

export const saveSettingMiddleware = (store: any) => (next: any) => (
  action: ActionsUnion<typeof actions>
) => {
  if (action.type === SAVE_SETTING) {
    localforage.setItem("setting", action.payload);
  }
  return next(action);
};
