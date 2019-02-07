
import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CounterState {
  num: number;
};

export const initialCounterState: CounterState = {
  num: 0
};

export const selectCounterState = createFeatureSelector<CounterState>('count');
export const getCounter = createSelector(selectCounterState, state => state.num);
