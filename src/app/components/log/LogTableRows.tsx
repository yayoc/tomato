import React, { useState } from "react";
import { Session } from "../../modules/logs";

type Props = {
  works: Session[];
  onSave: (id: string, note: string) => void;
};

export function LogTableRows({ works, onSave }: Props) {
  const [editingState, setEditingState] = useState<{
    [id: string]: { isEditing: boolean; note: string };
  }>({});
  return works.map((log: Session) => {
    const isEditing = editingState[log.id] && editingState[log.id].isEditing;
    const editingNote = isEditing ? editingState[log.id].note : "";
    return (
      <tr key={log.id}>
        <td>{log.startAt}</td>
        <td>{log.endAt}</td>
        {isEditing ? (
          <textarea
            value={editingNote}
            onChange={e => {
              setEditingState({
                [log.id]: { isEditing: true, note: e.target.value }
              });
            }}
          />
        ) : (
          <td>{log.note} </td>
        )}
        <td>
          {isEditing ? (
            <button
              onClick={() => {
                onSave(log.id, editingNote);
                setEditingState({
                  [log.id]: { isEditing: false, note: "" }
                });
              }}
            >
              save
            </button>
          ) : (
            <button
              onClick={() => {
                setEditingState({
                  [log.id]: { isEditing: true, note: log.note }
                });
              }}
            >
              edit
            </button>
          )}
        </td>
      </tr>
    );
  });
}
