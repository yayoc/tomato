import React, { useState, useCallback } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { actions } from "../../modules/setting";
import { toMIN, toMS } from "../../utils";
import { Heading } from "grommet";

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
      <div>
        <label htmlFor="workTimer">work timer (min)</label>
        <input
          type="number"
          value={toMIN(workTimer)}
          id="workTimer"
          onChange={e => setWorkTimer(toMS(Number(e.target.value)))}
          placeholder="25"
          list="workTimerList"
          min="1"
        />
        <datalist id="workTimerList">
          <option value={20} />
          <option value={25} />
          <option value={30} />
        </datalist>
      </div>
      <div>
        <label htmlFor="shortBreakTimer">short break timer (min)</label>
        <input
          type="number"
          value={toMIN(shortBreakTimer)}
          id="shortBreakTimer"
          onChange={e => setShortBreakTimer(toMS(Number(e.target.value)))}
          placeholder="5"
          list="shortBreakTimerList"
          min="1"
        />
        <datalist id="shortBreakTimerList">
          <option value={3} />
          <option value={5} />
          <option value={8} />
        </datalist>
      </div>
      <div>
        <label htmlFor="longBreakTimer">long break timer (min)</label>
        <input
          type="number"
          value={toMIN(longBreakTimer)}
          id="longBreakTimer"
          onChange={e => setLongBreakTimer(toMS(Number(e.target.value)))}
          placeholder="15"
          list="longBreakTimerList"
          min="1"
        />
        <datalist id="longBreakTimerList">
          <option value={10} />
          <option value={15} />
          <option value={20} />
        </datalist>
      </div>
      <button
        onClick={() => {
          const formData = {
            workTimer,
            shortBreakTimer,
            longBreakTimer
          };
          dispatch(actions.saveSetting(formData));
        }}
      >
        save
      </button>
    </>
  );
}
