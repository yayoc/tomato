import { actions } from "./actions";
import { actionTypes } from "./types";
import { ActionsUnion } from "../../../utils";

export type Work = {
  id: string;
  startAt: string;
  endAt: string;
  note: string;
};

type State = {
  work: {
    [id: string]: Work;
  };
};

export const initialState = {
  work: {}
};

export const reducer = (
  state: State = initialState,
  action: ActionsUnion<typeof actions>
): State => {
  switch (action.type) {
    case actionTypes.SET_WORK_ENTITY: {
      return {
        ...state,
        work: {
          ...state.work,
          [action.payload.id]: action.payload
        }
      };
    }
    default:
      return state;
  }
};
