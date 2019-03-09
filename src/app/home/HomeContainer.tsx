import React, { useState } from "react";
import { CountDown } from "./CountDown";
import { useStore } from "../Context";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [{ setting }] = useStore() as any;
  return isWorking ? (
    <>
      <p>working</p>
      <CountDown
        key="workingCountDown"
        initialCount={setting.workTimer}
        delay={100}
        isRunning={isRunning}
        onComplete={() => {
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
