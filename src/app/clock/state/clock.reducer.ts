import { Action } from '@ngrx/store';
import { ActionTypes } from './clock.actions';
import { initialClockState } from './clock.state';
import { UpdateColor, UpdateMask } from '../state/clock.actions';

export const initialState = initialClockState

export function clockReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.UpdateColor:
      let _action = action as UpdateColor;
      return Object.assign({}, state, _action.payload);

    case ActionTypes.UpdateMask:
      let __action = action as UpdateMask;
      return Object.assign({}, state, __action.payload);

    default:
      return state;
  }
}
