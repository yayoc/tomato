import { actions } from "./actions";
import {
  SET_WORK_SESSION,
  SET_BREAK_SESSION,
  LOAD_SESSIONS_SUCCESS
} from "./types";
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
    case SET_WORK_SESSION: {
      return {
        ...state,
        works: [...state.works, action.payload]
      };
    }
    case SET_BREAK_SESSION: {
      return {
        ...state,
        breaks: [...state.breaks, action.payload]
      };
    }
    case LOAD_SESSIONS_SUCCESS: {
      return {
        ...state,
        works: [...state.works, ...action.payload.workSessions],
        breaks: [...state.breaks, ...action.payload.breakSessions]
      };
    }
    default:
      return state;
  }
};
