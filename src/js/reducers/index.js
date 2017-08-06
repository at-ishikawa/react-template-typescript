import {handleActions} from "redux-actions";

const index = handleActions({
  INCREMENT: (state, { payload: amount }) => ({
    ...state,
    counter: state.counter + amount
  }),
  DECREMENT: (state, { payload: amount }) => ({
    ...state,
    counter: state.counter + amount
  })
}, {
  counter: 0
});

export default {
  index
};
