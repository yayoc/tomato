import React from "react";
import { useStore } from "../Context";
import { Work } from "../modules/entity";

export function LogContainer() {
  const [{ log, entity }] = useStore() as any;
  const logs = log.workIds.map((id: string) => entity.work[id]);
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
          {logs.map((log: Work) => (
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
