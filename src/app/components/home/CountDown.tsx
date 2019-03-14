import React, { useState, useEffect, useRef } from "react";
import { Session } from "../../modules/logs";

function useInterval(callback: () => void, delay: number | null) {
  const saveCallback = useRef<() => void>();
  useEffect(() => {
    saveCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      (saveCallback as React.MutableRefObject<() => void>).current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  });
}

type Props = {
  initialCount: number;
  delay: number;
  isRunning: boolean;
  onComplete: (work: Session) => void;
};

type TempWork = Partial<Session>;

const getRandomId = (): string =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export function CountDown(props: Props) {
  const [count, setCount] = useState(props.initialCount);
  const [isRunning, setRunning] = useState(props.isRunning);
  const [isStarted, setStarting] = useState(false);
  const initialWork: TempWork = {
    id: getRandomId()
  };
  const [work, setWork] = useState(initialWork);
  useInterval(
    () => {
      if (count <= 0) {
        setRunning(false);
        setStarting(false);
        props.onComplete({ ...work, endAt: Date() } as Session);
        setWork(initialWork);
      } else {
        if (!isStarted) {
          setStarting(true);
          setWork({ ...work, startAt: Date() });
        }
        setCount(count - props.delay);
      }
    },
    isRunning ? props.delay : null
  );

  return (
    <>
      <span>{count}</span>
      <div>
        <button onClick={() => setRunning(true)}>start</button>
        <button onClick={() => setRunning(false)}>stop</button>
      </div>
    </>
  );
}
