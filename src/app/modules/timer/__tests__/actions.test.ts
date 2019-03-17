import { actions } from "../actions";
import { START, STOP, RESET } from "../types";
import { SessionType } from "../reducer";

describe("Test timer actions", () => {
  test("reset", () => {
    expect(actions.reset().type).toEqual(RESET);
  });
  test("start", () => {
    const action = actions.start("foo", 0, 10, SessionType.Work);
    expect(action.type).toEqual(START);
    expect(action.payload.id).toEqual("foo");
    expect(action.payload.startAt).toEqual(0);
    expect(action.payload.expireCount).toEqual(10);
    expect(action.payload.type).toEqual(SessionType.Work);
  });
  test("stop", () => {
    const action = actions.stop("foo");
    expect(action.type).toEqual(STOP);
    expect(action.payload).toEqual("foo");
  });
});
