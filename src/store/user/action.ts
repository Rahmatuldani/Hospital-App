import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { USERS_ACTION_TYPES, UserType } from './types';
import { generateRandomString } from '../../utils/convert';
import Users from '../../data/users.json';
import { reducerError, reducerLoading } from '../shared/action';
import { Dispatch } from 'redux';

// Begin Fetch User
export type FetchUsers = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS, UserType[]>;
export const fetchUsers = withMatcher(
    (users: UserType[]): FetchUsers => createAction(USERS_ACTION_TYPES.FETCH_USERS, users)
);

export function FetchUsersFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const users: UserType[] = Users;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(fetchUsers(users));
    
                return resolve('Fetch user success');
            }
    
            const error: Error = new Error('Fetch user failed');
            dispatch(reducerError(error));
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

export function CreateUserFunction(dispatch: Dispatch, user: UserType): Promise<string> {
    dispatch(reducerLoading());
    user._id = generateRandomString();
    user.password = 'adminpass';

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(createUser(user));
    
                return resolve('Create user success');
            }
    
            const error: Error = new Error('Create user failed');
            dispatch(reducerError(error));
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

export function UpdateUserFunction(dispatch: Dispatch, user: UserType): Promise<string> {
    dispatch(reducerLoading());

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(updateUser(user));
    
                return resolve('Update user success');
            }
    
            const error: Error = new Error('Update user failed');
            dispatch(reducerError(error));
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

export function DeleteUserFunction(dispatch: Dispatch, id: string): Promise<string> {
    dispatch(reducerLoading());

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(deleteUser(id));
    
                return resolve('Delete user success');
            }
    
            const error: Error = new Error('Delete user failed');
            dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Delete User