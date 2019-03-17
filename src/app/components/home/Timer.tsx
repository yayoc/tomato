import React from "react";
import { toMIN } from "../../utils";

type Props = {
  count: number;
  onStart: () => void;
  onStop: () => void;
  onComplete: () => void;
};

const msToMinAndSec = (ms: number): string => {
  const min = Math.floor(toMIN(ms)).toString();
  const sec = ((ms % 60000) / 1000).toFixed(0);
  return `${min}:${sec < "10" ? "0" + sec : sec}`;
};

export function Timer({ count, onStart, onStop, onComplete }: Props) {
  if (count === 0) {
    onComplete();
  }
  return (
    <>
      <div>count: {msToMinAndSec(count)}</div>
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
    </>
  );
}
