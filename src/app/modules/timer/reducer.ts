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
  expireAt: number | null;
  count: number;
  type: SessionType;
};

const initialState = {
  isRunning: false,
  id: "",
  startAt: null,
  expireAt: null,
  count: 0,
  type: SessionType.Work
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
) => {
  switch (action.type) {
    case START: {
      const { startAt, expireAt, id } = action.payload;
      return { ...state, isRunning: true, id, startAt, expireAt };
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
