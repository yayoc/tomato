import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { actionTypes } from "./types";

export type State = {
  workIds: string[];
};

export const initialState = {
  workIds: []
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
): State => {
  switch (action.type) {
    case actionTypes.DONE: {
      return {
        ...state,
        workIds: [...state.workIds, action.payload]
      };
    }
    default:
      return state;
  }
};
