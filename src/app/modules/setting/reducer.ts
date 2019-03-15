import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { SAVE_SETTING } from "./types";
import { toMS } from "../../utils";

export type State = {
  workTimer: number;
  shortBreakTimer: number;
  longBreakTimer: number;
};

export const initialState: State = {
  workTimer: toMS(25),
  shortBreakTimer: toMS(5),
  longBreakTimer: toMS(15)
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
