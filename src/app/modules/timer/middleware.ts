import { actions as timerActions } from "./actions";
import { actions as logsActions } from "../logs/actions";
import { ActionsUnion } from "../../../utils";
import { START, STOP } from "./types";

let timers: { [key: string]: NodeJS.Timeout } = {};

export const startTimerMiddleware = (store: any) => (next: any) => (
  action: ActionsUnion<typeof timerActions>
) => {
  if (action.type === START) {
    const delay = 1000;
    timers[action.payload.id] = setInterval(() => {
      const currentCount = store.getState().timer.count;
      const expireAt = store.getState().timer.expireAt;
      if (currentCount + delay >= expireAt) {
        store.dispatch(timerActions.stop(action.payload.id));
        // set an working or breaking session here
        store.dispatch(
          logsActions.setWork({
            id: action.payload.id,
            startAt: action.payload.startAt.toString(),
            endAt: Date.now().toString(),
            note: ""
          })
        );
      } else {
        store.dispatch(timerActions.tick(currentCount + delay));
      }
    }, delay);
  }
  return next(action);
};

export const stopTimerMiddleware = (store: any) => (next: any) => (
  action: ActionsUnion<typeof timerActions>
) => {
  if (action.type === STOP) {
    clearInterval(timers[action.payload]);
  }
  return next(action);
};
