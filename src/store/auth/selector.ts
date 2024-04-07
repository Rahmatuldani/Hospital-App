import { createSelector } from 'reselect';
import { RootState } from '../store';
import { AuthState } from './reducer';

const selectAuthReducer = (state: RootState): AuthState => state.auth;

export const selectCurrentUser = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.currentUser
);

export const selectAuthIsLoading = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.isLoading
);
export const selectAuthError = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.error
);