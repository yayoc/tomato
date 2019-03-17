import { createAction } from "../../../utils";
import { START, STOP, RESET, TICK } from "./types";
import { SessionType } from "../logs/reducer";

export const actions = {
  start: (id: string, startAt: number, expireCount: number, type: SessionType) =>
    createAction(START, { id, startAt, expireCount, type }),
  tick: (count: number) => createAction(TICK, count),
  stop: (id: string) => createAction(STOP, id),
  reset: () => createAction(RESET)
};
