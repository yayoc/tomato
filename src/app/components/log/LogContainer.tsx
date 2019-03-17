import React, { useCallback } from "react";
import { actions, Session } from "../../modules/logs";
import { LogTableRows } from "./LogTableRows";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Heading } from "grommet";

export function LogContainer() {
  const mapState = useCallback(
    state => ({
      logs: state.logs
    }),
    []
  );
  const { logs } = useMappedState(mapState);
  const dispatch = useDispatch();

  return (
    <>
      <Heading>Work Log📝</Heading>
      <table>
        <thead>
          <tr>
            <th>start at</th>
            <th>end at</th>
            <th>note</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {LogTableRows({
            works: logs.sessions,
            onSave: (session: Session) => dispatch(actions.update(session))
          })}
        </tbody>
      </table>
      {logs.sessions.length && (
        <button
          onClick={() => {
            dispatch(actions.deleteAll());
          }}
        >
          Delete all logs
        </button>
      )}
    </>
  );
}
