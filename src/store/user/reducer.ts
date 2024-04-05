import { AnyAction } from 'redux';
import { createUserFailed, createUserStart, createUserSuccess, deleteUserFailed, deleteUserStart, deleteUserSuccess } from './action';
import { UserType } from './types';

export type UsersState = {
    readonly users: UserType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

export const USERS_INITIAL_STATE: UsersState = {
    users: [
        {
            _id: '1',
            address: 'Testing address',
            email: 'testing@gmail.com',
            gender: 'Laki-laki',
            name: 'Testing',
            phone: '08123456789',
            role: 'Administrator',
            photo: null
        }
    ],
    isLoading: false,
    error: null
};

export function usersReducer(
    state = USERS_INITIAL_STATE,
    action: AnyAction
): UsersState {
    if (
        createUserStart.match(action) ||
        deleteUserStart.match(action)
    ){
        return {...state, isLoading: true};
    }

    if (createUserSuccess.match(action)) {
        return {...state, isLoading: false, users: [...state.users, action.payload], error: null};
    }
    if (deleteUserSuccess.match(action)) {
        const newUsers = state.users.filter(user => user._id !== action.payload);
        return {...state, isLoading: false, users: newUsers, error: null};
    }

    if (
        createUserFailed.match(action) ||
        deleteUserFailed.match(action)
    ) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}