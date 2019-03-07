import React, { useState } from "react";
import { CountDown } from "./CountDown";
import { useSetting } from "../Context";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  const [settingState, dispatch] = useSetting() as any;
  return isWorking ? (
    <>
      <p>working</p>
      <CountDown
        key="workingCountDown"
        initialCount={settingState.workTimer}
        delay={100}
        isRunning={true}
        onComplete={() => setWorking(false)}
      />
    </>
  ) : (
    <>
      <p>breaking</p>
      <CountDown
        key="breakingCountDown"
        initialCount={settingState.shortBreakTimer}
        delay={100}
        isRunning={true}
        onComplete={() => setWorking(true)}
      />
    </>
  );
}
