import { handleActions } from "redux-actions";

type State = {
  counter: number
};

const index = handleActions(
  {
    INCREMENT: (state: State) => ({
      ...state,
      counter: state.counter + 1
    }),
    DECREMENT: (state: State) => ({
      ...state,
      counter: state.counter - 1
    })
  },
  {
    counter: 0
  }
);

export default {
  index
};
