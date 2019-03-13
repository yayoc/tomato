import { actions } from "./actions";
import { actionTypes } from "./types";
import { ActionsUnion } from "../../../utils";

export type Session = {
  id: string;
  startAt: string;
  endAt: string;
  note: string;
};

type State = {
  works: Session[];
  breaks: Session[];
};

export const initialState = {
  works: [],
  breaks: []
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
): State => {
  switch (action.type) {
    case actionTypes.SET_WORK_SESSION: {
      return {
        ...state,
        works: [...state.works, action.payload]
      };
    }
    case actionTypes.SET_BREAK_SESSION: {
      return {
        ...state,
        breaks: [...state.breaks, action.payload]
      };
    }
    default:
      return state;
  }
};
