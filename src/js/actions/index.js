// @flow
import { createActions } from 'redux-actions';

export const {
  increment,
  decrement
} = createActions({
  INCREMENT: (amount: integer) => (1),
  DECREMENT: (amount: integer) => (-1)
});
