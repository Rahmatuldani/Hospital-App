import { AnyAction } from 'redux';
import { login, logout, reducerError, reducerLoading } from './action';
import { UserType } from '../user/types';

export type AuthState = {
    readonly currentUser: UserType | null;
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

export const AUTH_INITIAL_STATE: AuthState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export function authReducer(
    state = AUTH_INITIAL_STATE,
    action: AnyAction
): AuthState {
    if (reducerLoading.match(action)) {
        return {...state, isLoading: true};
    }
    if (login.match(action)) {
        return {...state, isLoading: false, currentUser: action.payload, error: null};
    }
    if (logout.match(action)) {
        return {...state, isLoading: false, currentUser: null, error: null};
    }
    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}