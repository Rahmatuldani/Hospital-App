import { AnyAction } from 'redux';
import { 
    createUser,
    deleteUser,
    fetchUsers,
    updateUser, 
} from './action';
import { UserType } from './types';
import { reducerError, reducerLoading } from '../shared/action';

export type UsersState = {
    readonly users: UserType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

export const USERS_INITIAL_STATE: UsersState = {
    users: [],
    isLoading: false,
    error: null
};

export function usersReducer(
    state = USERS_INITIAL_STATE,
    action: AnyAction
): UsersState {
    if (reducerLoading.match(action)){
        return {...state, isLoading: true};
    }

    if (fetchUsers.match(action)) {
        return {...state, isLoading: false, users: action.payload, error: null};
    }
    if (createUser.match(action)) {
        return {...state, isLoading: false, users: [...state.users, action.payload], error: null};
    }
    if (updateUser.match(action)) {
        const updateUsers = state.users.map((user) => {
            if (user._id === action.payload._id) {
                return action.payload;
            }
            return user;
        });
        return {...state, isLoading: false, users: updateUsers, error: null};
    }
    if (deleteUser.match(action)) {
        const newUsers = state.users.filter(user => user._id !== action.payload);
        return {...state, isLoading: false, users: newUsers, error: null};
    }

    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}