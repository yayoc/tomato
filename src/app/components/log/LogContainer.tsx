import React, { useCallback } from "react";
import { actions } from "../../modules/logs";
import { LogTableRows } from "./LogTableRows";
import { useMappedState, useDispatch } from "redux-react-hook";

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
      <h1>Work Log📝</h1>
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
            works: logs.works,
            onSave: (id: string, note: string) =>
              dispatch(actions.updateWorkSessionNote(id, note))
          })}
        </tbody>
      </table>
      {logs.works.length && (
        <button
          onClick={() => {
            dispatch(actions.deleteAllLogs());
          }}
        >
          Delete all logs
        </button>
      )}
    </>
  );
}
