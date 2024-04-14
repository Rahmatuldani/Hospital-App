import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { SHARED_ACTION_TYPES } from './types';

// Reducer Loading
export type ReducerLoading = Action<SHARED_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(SHARED_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<SHARED_ACTION_TYPES.REDUCER_ERROR, Error>;
export const reducerError = withMatcher(
    (error: Error): ReducerError => createAction(SHARED_ACTION_TYPES.REDUCER_ERROR, error)
);