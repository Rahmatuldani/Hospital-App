import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { USERS_ACTION_TYPES, UserType } from './types';
import { store } from '../store';

// Begin Create User
export type CreateUserStart = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USERS_START, UserType>;
export const createUserStart = withMatcher(
    (user: UserType): CreateUserStart => createAction(USERS_ACTION_TYPES.CREATE_USERS_START, user)
);

export type CreateUserSuccess = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USERS_SUCCESS, UserType>;
export const createUserSuccess = withMatcher(
    (user: UserType): CreateUserSuccess => createAction(USERS_ACTION_TYPES.CREATE_USERS_SUCCESS, user)
);

export type CreateUserFailed = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USERS_FAILED, Error>;
export const createUserFailed = withMatcher(
    (error: Error): CreateUserFailed => createAction(USERS_ACTION_TYPES.CREATE_USERS_FAILED, error)
);

export function CreateUserFunction(user: UserType): Promise<string> {
    store.dispatch(createUserStart(user));
    user._id = String(Math.floor(Math.random() * 100));

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(createUserSuccess(user));
    
                return resolve('Create user success');
            }
    
            const error: Error = new Error('Create user failed');
            store.dispatch(createUserFailed(error));
            return reject(error);
        }, 1000);
    });
}
// End Create User

// Begin Delete User
export type DeleteUserStart = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USERS_START, string>;
export const deleteUserStart = withMatcher(
    (id: string): DeleteUserStart => createAction(USERS_ACTION_TYPES.DELETE_USERS_START, id)
);

export type DeleteUserSuccess = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USERS_SUCCESS, string>;
export const deleteUserSuccess = withMatcher(
    (id: string): DeleteUserSuccess => createAction(USERS_ACTION_TYPES.DELETE_USERS_SUCCESS, id)
);

export type DeleteUserFailed = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USERS_FAILED, Error>;
export const deleteUserFailed = withMatcher(
    (error: Error): DeleteUserFailed => createAction(USERS_ACTION_TYPES.DELETE_USERS_FAILED, error)
);

export function DeleteUserFunction(id: string): Promise<string> {
    store.dispatch(deleteUserStart(id));

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                store.dispatch(deleteUserSuccess(id));
    
                return resolve('Delete user success');
            }
    
            const error: Error = new Error('Delete user failed');
            store.dispatch(deleteUserFailed(error));
            return reject(error);
        }, 1000);
    });
}
// End Delete User