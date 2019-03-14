import { actions } from "./actions";
import { SAVE_SETTING } from "./types";

describe("setting actions", () => {
  test("saveSetting", () => {
    const setting = {
      workTimer: 0,
      shortBreakTimer: 0,
      longBreakTimer: 0
    };
    const action = actions.saveSetting(setting);
    expect(action.type).toEqual(SAVE_SETTING);
    expect(action.payload).toEqual(setting);
  });
});
