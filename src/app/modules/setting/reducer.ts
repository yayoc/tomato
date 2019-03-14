import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { actionTypes } from "./types";

export type State = {
  workTimer: number;
  shortBreakTimer: number;
  longBreakTimer: number;
};

export const initialState: State = {
  workTimer: 200,
  shortBreakTimer: 100,
  longBreakTimer: 150
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
