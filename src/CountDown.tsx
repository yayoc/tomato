import React, { useState, useEffect, useRef } from "react";

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
  onComplete: () => void;
};

export function CountDown(props: Props) {
  const [count, setCount] = useState(props.initialCount);
  const [isRunning, setRunning] = useState(props.isRunning);
  useInterval(
    () => {
      if (count === 0) {
        setRunning(false);
        props.onComplete();
      } else {
        setCount(count - props.delay);
      }
    },
    isRunning ? props.delay : null
  );

  return (
    <>
      {count}
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>
    </>
  );
}
