// @flow
import * as Actions from "../actions/index";
import reducers from "./index";

describe("index reducers", () => {
  it("increment", () => {
    const state = {
      counter: 0
    };
    const actual = reducers.index(state, Actions.increment());
    expect(actual.counter).toBe(1);
  });

  it("decrement", () => {
    const state = {
      counter: 0
    };
    const actual = reducers.index(state, Actions.decrement());
    expect(actual.counter).toBe(-1);
  });
});
