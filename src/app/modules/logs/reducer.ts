import { actions } from "./actions";
import {
  SET_WORK_SESSION,
  SET_BREAK_SESSION,
  LOAD_SESSIONS_SUCCESS,
  UPDATE_WORK_SESSION_NOTE
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
    case UPDATE_WORK_SESSION_NOTE: {
      const works = state.works.map(work => {
        if (work.id === action.payload.id) {
          return { ...work, note: action.payload.note };
        }
        return work;
      });
      return {
        ...state,
        works
      };
    }
    default:
      return state;
  }
};
