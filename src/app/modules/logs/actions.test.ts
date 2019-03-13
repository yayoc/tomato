import { actions } from "./actions";
import {
  LOAD_SESSIONS_REQUEST,
  LOAD_SESSIONS_SUCCESS,
  SET_WORK_SESSION,
  SET_BREAK_SESSION
} from "./types";

describe("Test logs actions", () => {
  test("loadSessionsRequest", () => {
    expect(actions.loadSessionsRequest().type).toEqual(LOAD_SESSIONS_REQUEST);
  });
  test("loadSessionsSuccess", () => {
    const action = actions.loadSessionsSuccess([], []);
    expect(action.type).toEqual(LOAD_SESSIONS_SUCCESS);
    expect(action.payload.workSessions).toEqual([]);
    expect(action.payload.breakSessions).toEqual([]);
  });
  test("setWork", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: ""
    };
    const action = actions.setWork(work);
    expect(action.type).toEqual(SET_WORK_SESSION);
    expect(action.payload).toEqual(work);
  });

  test("setBreak", () => {
    const breakSession = {
      id: "",
      startAt: "",
      endAt: "",
      note: ""
    };
    const action = actions.setBreak(breakSession);
    expect(action.type).toEqual(SET_BREAK_SESSION);
    expect(action.payload).toEqual(breakSession);
  });
});
