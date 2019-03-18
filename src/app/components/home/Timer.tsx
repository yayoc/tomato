import React from "react";
import { Button, Box } from "grommet";
import { LabelledMeter } from "./LabelledMeter";
import { toMIN } from "../../utils";

type Props = {
  count: number;
  totalCount: number;
  onStart: () => void;
  onStop: () => void;
};

/**
 * Convert milliseconde to mm:ss
 * @param ms
 * @todo Write unit test
 */

const msToMinAndSec = (ms: number): string => {
  const min = Math.floor(toMIN(ms)).toString();
  const sec = ((ms % 60000) / 1000).toFixed(0);
  return `${min}:${sec < "10" ? "0" + sec : sec}`;
};

export function Timer({ count, totalCount, onStart, onStop }: Props) {
  return (
    <>
      <Box align="center" pad="large">
        <LabelledMeter
          label={msToMinAndSec(count)}
          value={(count / totalCount) * 100}
        />
        <Box direction="row" align="center" gap="small" pad="xsmall">
          <Button
            a11yTitle="start button for the timer"
            onClick={onStart}
            label="start"
            primary
          />
          <Button
            a11yTitle="stop button for the timer"
            onClick={onStop}
            label="stop"
          />
        </Box>
      </Box>
    </>
  );
}
