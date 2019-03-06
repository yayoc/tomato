import React, { useState } from "react";
import { CountDown } from "./CountDown";

export function HomeContainer() {
  const [isWorking, setWorking] = useState(true);
  return isWorking ? (
    <>
      <p>working</p>
      <CountDown
        key="workingCountDown"
        initialCount={1000}
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
        initialCount={500}
        delay={100}
        isRunning={true}
        onComplete={() => setWorking(true)}
      />
    </>
  );
}
