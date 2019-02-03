import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';
import { initialCounterState } from './counter.state';

export const initialState = initialCounterState

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return Object.assign({}, state, { num: state.num + 1 });

    case ActionTypes.Decrement:
      return Object.assign({}, state, { num: state.num - 1 });

    case ActionTypes.Reset:
      return Object.assign({}, state, { num: 0 });

    default:
      return state;
  }
}
