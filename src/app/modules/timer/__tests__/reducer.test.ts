import { reducer, initialState } from "../reducer";
import { SessionType } from "../../logs";
import { actions } from "../actions";

describe("Test timer reducer", () => {
  test("start timer", () => {
    const action = actions.start("foo", "0", 10, SessionType.Work);
    const state = reducer(initialState, action);
    expect(state.id).toEqual("foo");
    expect(state.isRunning).toEqual(true);
    expect(state.startAt).toEqual("0");
    expect(state.expireCount).toEqual(10);
    expect(state.type).toEqual(SessionType.Work);
  });

  test("stop timer", () => {
    const action = actions.stop("foo");
    const state = reducer(initialState, action);
    expect(state.isRunning).toEqual(false);
  });

  test("reset timer", () => {
    const action = actions.reset();
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
