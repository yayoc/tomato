import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { actions as timerActions, SessionType } from "../../modules/timer";
import { actions as logActions, Session } from "../../modules/logs";

const getRandomId = (): string =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const mapState = useCallback(
    state => ({
      setting: state.setting,
      timer: state.timer
    }),
    []
  );
  const { setting, timer } = useMappedState(mapState);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Tomato🍅</h1>
      {isWorking ? (
        <>
          <h2>working💪</h2>
          <div>remaining: {setting.workTimer - timer.count}</div>
          <button
            onClick={() => {
              dispatch(
                timerActions.start(
                  getRandomId(),
                  Date.now(),
                  Date.now() + setting.workTimer,
                  SessionType.Work
                )
              );
            }}
          >
            start
          </button>
          <button
            onClick={() => {
              dispatch(timerActions.stop(timer.id));
            }}
          >
            stop
          </button>
        </>
      ) : (
        <>
          <h2>breaking☕️</h2>
        </>
      )}
    </>
  );
}
