// @flow
import { createActions } from 'redux-actions';

export const {
  increment,
  decrement
} = createActions({
  INCREMENT: (amount: number) => (amount),
  DECREMENT: (amount: number) => (-amount)
});
