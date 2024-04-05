import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { USERS_ACTION_TYPES, UserType } from './types';
import { store } from '../store';
import { generateRandomString } from '../../utils/convert';
import Dummy from '../../data/dummy.json';

// Reducer Loading
export type ReducerLoading = Action<USERS_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(USERS_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<USERS_ACTION_TYPES.REDUCER_ERROR, Error>;
export const reducerError = withMatcher(
    (error: Error): ReducerError => createAction(USERS_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Fetch User
export type FetchUsers = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS, UserType[]>;
export const fetchUsers = withMatcher(
    (users: UserType[]): FetchUsers => createAction(USERS_ACTION_TYPES.FETCH_USERS, users)
);

export function FetchUsersFunction(): Promise<string> {
    store.dispatch(reducerLoading());
    const users: UserType[] = Dummy;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(fetchUsers(users));
    
                return resolve('Fetch user success');
            }
    
            const error: Error = new Error('Fetch user failed');
            store.dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Fetch User

// Begin Create User
export type CreateUser = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USERS, UserType>;
export const createUser = withMatcher(
    (user: UserType): CreateUser => createAction(USERS_ACTION_TYPES.CREATE_USERS, user)
);

export function CreateUserFunction(user: UserType): Promise<string> {
    store.dispatch(reducerLoading());
    user._id = generateRandomString();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(createUser(user));
    
                return resolve('Create user success');
            }
    
            const error: Error = new Error('Create user failed');
            store.dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Create User

// Begin Update User
export type UpdateUser = ActionWithPayload<USERS_ACTION_TYPES.UPDATE_USERS, UserType>;
export const updateUser = withMatcher(
    (user: UserType): UpdateUser => createAction(USERS_ACTION_TYPES.UPDATE_USERS, user)
);

export function UpdateUserFunction(user: UserType): Promise<string> {
    store.dispatch(reducerLoading());

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(updateUser(user));
    
                return resolve('Update user success');
            }
    
            const error: Error = new Error('Update user failed');
            store.dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Update User

// Begin Delete User
export type DeleteUser = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USERS, string>;
export const deleteUser = withMatcher(
    (id: string): DeleteUser => createAction(USERS_ACTION_TYPES.DELETE_USERS, id)
);

export function DeleteUserFunction(id: string): Promise<string> {
    store.dispatch(reducerLoading());

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(deleteUser(id));
    
                return resolve('Delete user success');
            }
    
            const error: Error = new Error('Delete user failed');
            store.dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Delete User