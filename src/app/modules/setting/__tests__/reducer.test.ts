import { reducer, initialState } from "../reducer";
import { actions } from "../actions";

describe("setting reducer", () => {
  test("saveSetting", () => {
    const setting = {
      workTimer: 0,
      shortBreakTimer: 0,
      longBreakTimer: 0
    };
    const action = actions.saveSetting(setting);
    const state = reducer(initialState, action);
    expect(state.workTimer).toEqual(0);
    expect(state.shortBreakTimer).toEqual(0);
    expect(state.longBreakTimer).toEqual(0);
  });
});
