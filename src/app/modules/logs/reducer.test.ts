import { reducer, initialState } from "./reducer";
import { actions } from "./actions";

describe("Test logs reducer", () => {
  test("set work session", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: ""
    };
    const action = actions.setWork(work);
    const state = reducer(initialState, action);
    expect(state.works.length).toEqual(1);
    expect(state.works[0].id).toEqual("");
  });

  test("set break session", () => {
    const breakSession = {
      id: "",
      startAt: "",
      endAt: "",
      note: ""
    };
    const action = actions.setBreak(breakSession);
    const state = reducer(initialState, action);
    expect(state.breaks.length).toEqual(1);
    expect(state.breaks[0].id).toEqual("");
  });

  test("load sessions", () => {
    const work = {
      id: "",
      startAt: "",
      endAt: "",
      note: ""
    };
    const action = actions.loadSessionsSuccess([work], []);
    const state = reducer(initialState, action);
    expect(state.works.length).toEqual(1);
    expect(state.breaks.length).toEqual(0);
  });
});
