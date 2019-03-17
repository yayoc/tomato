import React, { useState, useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { actions as timerActions, SessionType } from "../../modules/timer";
import { Timer } from "./Timer";

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
          <Timer
            count={setting.workTimer - timer.count}
            onStart={() => {
              dispatch(
                timerActions.start(
                  getRandomId(),
                  Date.now(),
                  setting.workTimer,
                  SessionType.Work
                )
              );
            }}
            onStop={() => {
              dispatch(timerActions.stop(timer.id));
            }}
            onComplete={() => {
              setWorking(false);
            }}
          />
        </>
      ) : (
        <>
          <h2>breaking☕️</h2>
          <Timer
            count={setting.breakTimer - timer.count}
            onStart={() => {
              dispatch(
                timerActions.start(
                  getRandomId(),
                  Date.now(),
                  setting.breakTimer,
                  SessionType.Break
                )
              );
            }}
            onStop={() => {
              dispatch(timerActions.stop(timer.id));
            }}
            onComplete={() => {
              setWorking(true);
            }}
          />
        </>
      )}
    </>
  );
}
