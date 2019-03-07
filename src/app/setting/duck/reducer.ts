import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { actionTypes } from "./types";

export enum Theme {
  Light,
  Dark
}

export type State = {
  workTimer: number;
  shortBreakTimer: number;
  longBreakTimer: number;
  thresholdOfCheckmarks: number;
  theme: Theme;
  canNotify: boolean;
};

export const initialState: State = {
  workTimer: 25,
  shortBreakTimer: 5,
  longBreakTimer: 15,
  thresholdOfCheckmarks: 4,
  theme: Theme.Light,
  canNotify: true
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
): State => {
  switch (action.type) {
    case actionTypes.SAVE_SETTING: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
