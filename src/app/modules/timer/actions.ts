import { createAction } from "../../../utils";
import { START, STOP, RESET, TICK } from "./types";
import { SessionType } from "./reducer";

export const actions = {
  start: (id: string, startAt: number, expireAt: number, type: SessionType) =>
    createAction(START, { id, startAt, expireAt, type }),
  tick: (count: number) => createAction(TICK, count),
  stop: (id: string) => createAction(STOP, id),
  reset: () => createAction(RESET)
};
