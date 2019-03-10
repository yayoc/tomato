import React, { useState } from "react";
import localforage from "localforage";
import { CountDown } from "./CountDown";
import { useStore } from "../../Context";
import { actions as entityActions, Work } from "../../modules/entity";
import { actions as logActions } from "../../modules/log";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [{ setting, entity }, dispatch] = useStore() as any;
  return isWorking ? (
    <>
      <p>working</p>
      <CountDown
        key="workingCountDown"
        initialCount={setting.workTimer}
        delay={100}
        isRunning={isRunning}
        onComplete={(work: Work) => {
          dispatch(entityActions.setWork(work));
          dispatch(logActions.done(work.id));
          setRunning(false);
          setWorking(false);
          // Store the data into local storage
          // TODO: Use middleware instead of putting here.
          localforage.setItem("works", { ...entity.work, [work.id]: work });
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
        onComplete={() => {
          setRunning(false);
          setWorking(true);
        }}
      />
    </>
  );
}
