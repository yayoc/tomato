import React from "react";
import { useStore } from "../../Context";
import { Session } from "../../modules/logs";

export function LogContainer() {
  const { getState } = useStore() as any;
  const { logs } = getState();
  return (
    <>
      <h1>Work Log</h1>
      <table>
        <thead>
          <tr>
            <th>start at</th>
            <th>end at</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {logs.works.map((log: Session) => (
            <tr key={log.id}>
              <td>{log.startAt}</td>
              <td>{log.endAt}</td>
              <td>{log.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
