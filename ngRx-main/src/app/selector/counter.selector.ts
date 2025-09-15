// src/app/state/counter.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, NameState } from '../state/counter.state';

export const selectCounterState = createFeatureSelector<CounterState>('counter');
export const selectReasonState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState, 
  (state: CounterState) => state.count 
);

export const selectReason = createSelector(
    selectReasonState, 
    (state: CounterState) => state.reason
  );

  export const selectNameState = createFeatureSelector<NameState>('namer');
  export const selectName = createSelector(
    selectNameState,
    (state:NameState) => state.name
  )