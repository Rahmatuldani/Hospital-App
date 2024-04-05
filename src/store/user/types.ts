export enum USERS_ACTION_TYPES {
    REDUCER_LOADING = 'users/REDUCER_LOADING',
    REDUCER_ERROR = 'users/REDUCER_ERROR',

    FETCH_USERS = 'users/FETCH_USERS',
    CREATE_USERS = 'users/CREATE_USERS',
    UPDATE_USERS = 'users/UPDATE_USERS',
    DELETE_USERS = 'users/DELETE_USERS',
}

export type UserType = {
    _id: string;
    name: string;
    email: string;
    role: string;
    polyclinic?: string | null;
    gender: string;
    address?: string | null;
    phone: string;
}

export const UserRole = [
    'Administrator',
    'Receptionist',
    'Doctor',
    'Logistic',
    'Pharmacist',
    'Cashier'
];

export const Polyclinic =[
    'THT',
    'Mata',
    'Gigi',
    'Bedah Anak'
];