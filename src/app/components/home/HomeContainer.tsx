import React, { useState } from "react";
import localforage from "localforage";
import { CountDown } from "./CountDown";
import { useStore } from "../../Context";
import { actions as logActions, Session } from "../../modules/logs";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [{ setting, logs }, dispatch] = useStore() as any;
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
          // Store the data into local storage
          // TODO: Use middleware instead of putting here.
          localforage.setItem("works", [...logs.works, session]);
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
          setRunning(false);
          setWorking(true);
          localforage.setItem("breaks", [...logs.breaks, session]);
        }}
      />
    </>
  );
}
