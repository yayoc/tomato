import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { SAVE_SETTING } from "./types";

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
    case SAVE_SETTING: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
