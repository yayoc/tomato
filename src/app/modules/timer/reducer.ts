import { ActionsUnion } from "../../../utils";
import { actions } from "./actions";
import { START, TICK, STOP, RESET } from "./types";

export enum SessionType {
  Work = "work",
  Break = "break"
}

type State = {
  isRunning: boolean;
  id: string;
  startAt: number | null;
  expireCount: number;
  count: number;
  type: SessionType;
};

const initialState = {
  isRunning: false,
  id: "",
  startAt: null,
  expireCount: 0,
  count: 0,
  type: SessionType.Work
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
) => {
  switch (action.type) {
    case START: {
      const { startAt, expireCount, id } = action.payload;
      return { ...state, isRunning: true, id, startAt, expireCount };
    }
    case TICK: {
      return { ...state, count: action.payload };
    }
    case STOP: {
      return { ...state, isRunning: false };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
