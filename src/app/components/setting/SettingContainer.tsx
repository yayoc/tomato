import React, { useState } from "react";
import { useStore } from "../../Context";
import { actions } from "../../modules/setting";

export function SettingContainer() {
  const { getState, dispatch } = useStore() as any;
  const { setting } = getState();
  // Use state
  const [workTimer, setWorkTimer] = useState(setting.workTimer);
  const [shortBreakTimer, setShortBreakTimer] = useState(
    setting.shortBreakTimer
  );
  const [longBreakTimer, setLongBreakTimer] = useState(setting.longBreakTimer);

  return (
    <>
      <h1>Setting⚙️</h1>
      <div>
        <label>
          work timer:
          <input
            type="text"
            value={workTimer}
            id="workTimer"
            onChange={e => setWorkTimer(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          short break timer:
          <input
            type="text"
            value={shortBreakTimer}
            id="shortBreakTimer"
            onChange={e => setShortBreakTimer(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          long break timer:
          <input
            type="text"
            value={longBreakTimer}
            id="longBreakTimer"
            onChange={e => setLongBreakTimer(Number(e.target.value))}
          />
        </label>
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
