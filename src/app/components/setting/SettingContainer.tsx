import React, { useState } from "react";
import { useStore } from "../../Context";
import { actions, Theme } from "../../modules/setting";

export function SettingContainer() {
  const { getState, dispatch } = useStore() as any;
  const { setting } = getState();
  // Use state
  const [workTimer, setWorkTimer] = useState(setting.workTimer);
  const [shortBreakTimer, setShortBreakTimer] = useState(
    setting.shortBreakTimer
  );
  const [longBreakTimer, setLongBreakTimer] = useState(setting.longBreakTimer);
  const [theme, setTheme] = useState(setting.theme);
  const [canNotify, setNotify] = useState(setting.canNotify);

  return (
    <>
      <h2>Setting</h2>
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
      <div>
        <label>
          Theme:
          <label>
            light:
            <input
              type="radio"
              value={Theme.Light}
              checked={theme === Theme.Light}
              onChange={e => {
                const theme = (e.target.value as unknown) as Theme;
                setTheme(theme);
              }}
            />
            dark:
            <input
              type="radio"
              value={Theme.Dark}
              checked={theme === Theme.Dark}
              onChange={e => {
                const theme = (e.target.value as unknown) as Theme;
                setTheme(theme);
              }}
            />
          </label>
        </label>
      </div>
      <div>
        <label>
          Notification:
          <label>
            allow:
            <input
              type="radio"
              value={"true"}
              checked={canNotify}
              onChange={e => {
                const canNotify = (e.target.value as unknown) as boolean;
                setNotify(canNotify);
              }}
            />
            disallow:
            <input
              type="radio"
              value={"false"}
              checked={!canNotify}
              onChange={e => {
                const canNotify = (e.target.value as unknown) as boolean;
                setNotify(canNotify);
              }}
            />
          </label>
        </label>
      </div>
      <button
        onClick={() => {
          const formData = {
            workTimer,
            shortBreakTimer,
            longBreakTimer,
            theme,
            canNotify
          };
          dispatch(actions.saveSetting(formData));
        }}
      >
        save
      </button>
    </>
  );
}
