// import { AnyAction } from 'redux';
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
            genre: 'Laki-laki',
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
    // action: AnyAction
): UsersState {
    return state;
}