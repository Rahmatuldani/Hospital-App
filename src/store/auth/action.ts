import AuthApi from '../../data/authApi';
import Alert from '../../utils/alert';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { store } from '../store';
import { UserType } from '../user/types';
import { AUTH_ACTION_TYPES, LoginData } from './types';

// Reducer Loading
export type ReducerLoading = Action<AUTH_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(AUTH_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<AUTH_ACTION_TYPES.REDUCER_ERROR, Error>;
export const reducerError = withMatcher(
    (error: Error): ReducerError => createAction(AUTH_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Login
export type Login = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN, UserType>;
export const login = withMatcher(
    (user: UserType): Login => createAction(AUTH_ACTION_TYPES.LOGIN, user)
);

export async function LoginFunction(data: LoginData) {
    store.dispatch(reducerLoading());
    try {
        const user: UserType = await AuthApi.Login(data);
        store.dispatch(login(user));
        return user;
    } catch (error) {
        store.dispatch(reducerError(error as Error));
        Alert({
            title: 'Error',
            icon: 'error',
            text: (error as Error).message
        });
        return error as Error;
    }
}
// End Login

// Begin Logout
export type Logout = Action<AUTH_ACTION_TYPES.LOGOUT>;
export const logout = withMatcher(
    (): Logout => createAction(AUTH_ACTION_TYPES.LOGOUT)
);

export async function LogoutFunction() {
    store.dispatch(reducerLoading());
    try {
        store.dispatch(logout());
        return;
    } catch (error) {
        store.dispatch(reducerError(error as Error));
        return error as Error;
    }
}
// End Logout