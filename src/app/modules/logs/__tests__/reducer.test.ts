import { reducer, initialState, SessionType } from "../reducer";
import { actions } from "../actions";

describe("Test logs reducer", () => {
  test("set work session", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: "",
      type: SessionType.Work
    };
    const action = actions.set(work);
    const state = reducer(initialState, action);
    expect(state.sessions.length).toEqual(1);
    expect(state.sessions[0].id).toEqual("");
  });

  test("set break session", () => {
    const breakSession = {
      id: "",
      startAt: "",
      endAt: "",
      note: "",
      type: SessionType.ShortBreak
    };
    const action = actions.set(breakSession);
    const state = reducer(initialState, action);
    expect(state.sessions.length).toEqual(1);
    expect(state.sessions[0].id).toEqual("");
  });

  test("load sessions", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: "",
      type: SessionType.Work
    };
    const action = actions.loadSuccess([work]);
    const state = reducer(initialState, action);
    expect(state.sessions.length).toEqual(1);
  });
});
