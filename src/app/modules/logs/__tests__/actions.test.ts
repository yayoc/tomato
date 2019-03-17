import { actions } from "../actions";
import { LOAD_REQUEST, LOAD_SUCCESS, SET, UPDATE } from "../types";
import { SessionType } from "../reducer";

describe("Test logs actions", () => {
  test("load", () => {
    expect(actions.loadRequest().type).toEqual(LOAD_REQUEST);
  });
  test("loadSessionsSuccess", () => {
    const action = actions.loadSuccess([]);
    expect(action.type).toEqual(LOAD_SUCCESS);
    expect(action.payload).toEqual([]);
  });
  test("setWork", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: "",
      type: SessionType.Work
    };
    const action = actions.set(work);
    expect(action.type).toEqual(SET);
    expect(action.payload).toEqual(work);
  });

  test("update", () => {
    const updatedSession = {
      id: "",
      startAt: "",
      endAt: "",
      note: "",
      type: SessionType.Work
    };
    const action = actions.update(updatedSession);
    expect(action.type).toEqual(UPDATE);
    expect(action.payload).toEqual(updatedSession);
  });
});
