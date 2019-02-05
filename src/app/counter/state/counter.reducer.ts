import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';
import { initialCounterState } from './counter.state';
import { Update } from '../state/counter.actions';

export const initialState = initialCounterState

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return Object.assign({}, state, { num: state.num + 1 });

    case ActionTypes.Decrement:
      return Object.assign({}, state, { num: state.num - 1 });

    case ActionTypes.Reset:
      return Object.assign({}, state, { num: 0 });

    case ActionTypes.Update:
      let _action = action as Update;
      console.log(_action);
      return Object.assign({}, state, { num: _action.payload.num });

    default:
      return state;
  }
}
