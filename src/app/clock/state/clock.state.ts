
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface ClockState {
  color: string;
  mask: string;
};

export const initialClockState: ClockState = {
  color: 'black',
  mask: 'hh:mm:ss'
};

export const selectClockState = createFeatureSelector<ClockState>('clock');
export const getColor = createSelector(selectClockState, state => state.color);
export const getMask = createSelector(selectClockState, state => state.mask);

