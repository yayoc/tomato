import React, { useState } from "react";
import { Session } from "../../modules/logs";
import { TableRow, TableCell, TextArea, Button } from "grommet";

type Props = {
  works: Session[];
  onSave: (session: Session) => void;
};

export function LogTableRows({ works, onSave }: Props) {
  const [editingState, setEditingState] = useState<{
    [id: string]: { isEditing: boolean; note: string };
  }>({});
  return works.map((log: Session) => {
    const isEditing = editingState[log.id] && editingState[log.id].isEditing;
    const editingNote = isEditing ? editingState[log.id].note : "";
    return (
      <TableRow key={log.id}>
        <TableCell>{log.startAt}</TableCell>
        <TableCell>{log.endAt}</TableCell>
        {isEditing ? (
          <TextArea
            value={editingNote}
            onChange={(e: any) => {
              setEditingState({
                [log.id]: { isEditing: true, note: e.target.value }
              });
            }}
          />
        ) : (
          <TableCell>{log.note} </TableCell>
        )}
        <TableCell>
          {isEditing ? (
            <Button
              onClick={() => {
                onSave({ ...log, note: editingNote });
                setEditingState({
                  [log.id]: { isEditing: false, note: "" }
                });
              }}
              label="save"
            />
          ) : (
            <Button
              onClick={() => {
                setEditingState({
                  [log.id]: { isEditing: true, note: log.note }
                });
              }}
              label="edit"
            />
          )}
        </TableCell>
      </TableRow>
    );
  });
}
