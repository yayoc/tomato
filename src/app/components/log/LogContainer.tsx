import React, { useCallback } from "react";
import { actions, Session } from "../../modules/logs";
import { LogTableRows } from "./LogTableRows";
import { useMappedState, useDispatch } from "redux-react-hook";
import {
  Heading,
  Table,
  Box,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Button
} from "grommet";

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
      <Box align="center" pad="large">
        <Table caption="log table">
          <TableHeader>
            <TableRow>
              <TableCell scope="col">
                <Text>start at</Text>
              </TableCell>
              <TableCell scope="col">
                <Text>end at</Text>
              </TableCell>
              <TableCell scope="col">
                <Text>note</Text>
              </TableCell>
              <TableCell scope="col">
                <Text>action</Text>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {LogTableRows({
              works: logs.sessions,
              onSave: (session: Session) => dispatch(actions.update(session))
            })}
          </TableBody>
        </Table>
      </Box>
      {logs.sessions.length && (
        <Button
          onClick={() => {
            dispatch(actions.deleteAll());
          }}
          label="Delete all logs"
        />
      )}
    </>
  );
}
