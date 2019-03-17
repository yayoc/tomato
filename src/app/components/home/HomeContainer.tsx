import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { actions as timerActions } from "../../modules/timer";
import { Timer } from "./Timer";
import { Session, SessionType } from "../../modules/logs";
import { Heading } from "grommet";

/**
 * Get random hashed id which is used for identifier of sessions.
 *
 */
const getRandomId = (): string =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

/**
 * Determine if the breaking should be short or not.
 * Return true if the latest three pairs of work and short break sessions exist. ???
 * Otherwise, Return false.
 *
 * @param sessions
 */
const canTakeLongBreak = (sessions: Session[]): boolean => {
  return (
    sessions.filter(session => {
      return session.type === SessionType.ShortBreak;
    }).length > 3
  );
};

/**
 * Return true when the latest session is break type or there is no logs.
 * Otherwise, Return false
 *
 * @param sessions
 */
const shouldWork = (sessions: Session[]): boolean => {
  const last = sessions[sessions.length - 1];
  if (!last) return true;
  return (
    last.type === SessionType.ShortBreak || last.type === SessionType.LongBreak
  );
};

export function HomeContainer() {
  const mapState = useCallback(
    state => ({
      setting: state.setting,
      logs: state.logs,
      timer: state.timer
    }),
    []
  );
  const { setting, timer, logs } = useMappedState(mapState);
  const dispatch = useDispatch();
  const isLongBreak = canTakeLongBreak(logs.sessions);
  return (
    <>
      <Heading>Tomato🍅</Heading>
      {shouldWork(logs.sessions) ? (
        <>
          <h2>working💪</h2>
          <Timer
            count={setting.workTimer - timer.count}
            totalCount={setting.workTimer}
            onStart={() => {
              dispatch(
                timerActions.start(
                  getRandomId(),
                  Date.now(),
                  setting.workTimer,
                  SessionType.Work
                )
              );
            }}
            onStop={() => {
              dispatch(timerActions.stop(timer.id));
            }}
          />
        </>
      ) : (
        <>
          <h2>breaking☕️</h2>
          <Timer
            count={
              isLongBreak
                ? setting.longBreakTimer - timer.count
                : setting.shortBreakTimer - timer.count
            }
            totalCount={
              isLongBreak ? setting.longBreakTimer : setting.shortBreakTimer
            }
            onStart={() => {
              dispatch(
                timerActions.start(
                  getRandomId(),
                  Date.now(),
                  isLongBreak
                    ? setting.longBreakTimer
                    : setting.shortBreakTimer,
                  isLongBreak ? SessionType.LongBreak : SessionType.ShortBreak
                )
              );
            }}
            onStop={() => {
              dispatch(timerActions.stop(timer.id));
            }}
          />
        </>
      )}
    </>
  );
}
