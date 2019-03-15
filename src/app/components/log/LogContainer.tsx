import React from "react";
import { useStore } from "../../Context";
import { actions } from "../../modules/logs";
import { LogTableRows } from "./LogTableRows";

export function LogContainer() {
  const { getState, dispatch } = useStore() as any;
  const { logs } = getState();
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
