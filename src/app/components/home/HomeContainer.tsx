import React, { useState } from "react";
import { CountDown } from "./CountDown";
import { useStore } from "../../Context";
import { actions as logActions, Session } from "../../modules/logs";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const { getState, dispatch } = useStore() as any;
  const { setting } = getState();
  return isWorking ? (
    <>
      <p>working</p>
      <CountDown
        key="workingCountDown"
        initialCount={setting.workTimer}
        delay={100}
        isRunning={isRunning}
        onComplete={(session: Session) => {
          dispatch(logActions.setWork(session));
          setRunning(false);
          setWorking(false);
        }}
      />
    </>
  ) : (
    <>
      <p>breaking</p>
      <CountDown
        key="breakingCountDown"
        initialCount={setting.shortBreakTimer}
        delay={100}
        isRunning={isRunning}
        onComplete={(session: Session) => {
          dispatch(logActions.setBreak(session));
          setRunning(false);
          setWorking(true);
        }}
      />
    </>
  );
}
