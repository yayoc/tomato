import React, { useState } from "react";
import { CountDown } from "./CountDown";
import { useStore } from "../../Context";
import { actions as entityActions, Work } from "../../modules/entity";
import { actions as logActions } from "../../modules/log";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [{ setting }, dispatch] = useStore() as any;
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
