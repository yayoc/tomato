import React, { useState, useCallback } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { actions } from "../../modules/setting";
import { toMIN, toMS } from "../../utils";
import { Heading, TextInput, Button, FormField, Box } from "grommet";

export function SettingContainer() {
  const mapState = useCallback(
    state => ({
      setting: state.setting
    }),
    []
  );
  const { setting } = useMappedState(mapState);
  const dispatch = useDispatch();

  // Use state
  const [workTimer, setWorkTimer] = useState(setting.workTimer);
  const [shortBreakTimer, setShortBreakTimer] = useState(
    setting.shortBreakTimer
  );
  const [longBreakTimer, setLongBreakTimer] = useState(setting.longBreakTimer);

  return (
    <>
      <Heading>Setting⚙️</Heading>
      <Box align="center" pad="large">
        <FormField label="work timer (min)" htmlFor="workTimer">
          <TextInput
            type="number"
            value={toMIN(workTimer)}
            id="workTimer"
            onChange={e => setWorkTimer(toMS(Number(e.target.value)))}
            placeholder="25"
            list="workTimerList"
            min="1"
            suggestions={["20", "25", "30"]}
          />
        </FormField>
        <FormField label="short break timer (min)" htmlFor="shortBreakTimer">
          <TextInput
            type="number"
            value={toMIN(shortBreakTimer)}
            id="shortBreakTimer"
            onChange={e => setShortBreakTimer(toMS(Number(e.target.value)))}
            placeholder="5"
            list="shortBreakTimerList"
            min="1"
            suggestions={["3", "5", "8"]}
          />
        </FormField>
        <FormField label="long break timer (min)" htmlFor="longBreakTimer">
          <TextInput
            type="number"
            value={toMIN(longBreakTimer)}
            id="longBreakTimer"
            onChange={e => setLongBreakTimer(toMS(Number(e.target.value)))}
            placeholder="15"
            list="longBreakTimerList"
            min="1"
            suggestions={["10", "15", "20"]}
          />
        </FormField>
      </Box>
      <Button
        onClick={() => {
          const formData = {
            workTimer,
            shortBreakTimer,
            longBreakTimer
          };
          dispatch(actions.saveSetting(formData));
        }}
        label="save"
        primary
      />
    </>
  );
}
