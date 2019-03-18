import { actions } from "./actions";
import { SET, UPDATE, DELETE_ALL, LOAD_SUCCESS } from "./types";
import { ActionsUnion } from "../../../utils";

export enum SessionType {
  Work = "work",
  ShortBreak = "shortBreak",
  LongBreak = "longBreak"
}

export type Session = {
  id: string;
  startAt: string;
  endAt: string;
  note: string;
  type: SessionType;
};

type State = {
  sessions: Session[];
};

export const initialState = {
  sessions: []
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
): State => {
  switch (action.type) {
    case SET: {
      return {
        ...state,
        sessions: [...state.sessions, action.payload]
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        sessions: [...state.sessions, ...action.payload]
      };
    }
    case UPDATE: {
      const sessions = state.sessions.map(session => {
        if (session.id === action.payload.id) {
          return { ...action.payload };
        }
        return session;
      });
      return {
        ...state,
        sessions
      };
    }
    case DELETE_ALL: {
      return initialState;
    }
    default:
      return state;
  }
};
