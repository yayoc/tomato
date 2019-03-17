import { actions as timerActions } from "./actions";
import { actions as logsActions } from "../logs/actions";
import { ActionsUnion } from "../../../utils";
import { START, STOP } from "./types";
import { SessionType } from "../logs/reducer";

let timers: { [key: string]: NodeJS.Timeout } = {};

export const startTimerMiddleware = (store: any) => (next: any) => (
  action: ActionsUnion<typeof timerActions>
) => {
  if (action.type === START) {
    const delay = 1000;
    timers[action.payload.id] = setInterval(() => {
      const { count, expireCount } = store.getState().timer;
      store.dispatch(timerActions.tick(count + delay));
      if (count + delay >= expireCount) {
        store.dispatch(timerActions.stop(action.payload.id));
        store.dispatch(timerActions.reset());
        // set an working or breaking session here
        if (action.payload.type === SessionType.Work) {
          store.dispatch(
            logsActions.set({
              id: action.payload.id,
              startAt: action.payload.startAt.toString(),
              endAt: Date.now().toString(),
              note: "",
              type: action.payload.type
            })
          );
        } else {
          store.dispatch(
            logsActions.set({
              id: action.payload.id,
              startAt: action.payload.startAt.toString(),
              endAt: Date.now().toString(),
              note: "",
              type: action.payload.type
            })
          );
        }
      }
    }, delay);
  }
  return next(action);
};

export const stopTimerMiddleware = () => (next: any) => (
  action: ActionsUnion<typeof timerActions>
) => {
  if (action.type === STOP) {
    clearInterval(timers[action.payload]);
  }
  return next(action);
};
