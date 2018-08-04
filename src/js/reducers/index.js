// @flow
import {handleActions} from "redux-actions";

const index = handleActions({
  INCREMENT: (state) => ({
    ...state,
    counter: state.counter + 1
  }),
  DECREMENT: (state) => ({
    ...state,
    counter: state.counter - 1
  })
}, {
  counter: 0
});

export default {
  index
};
