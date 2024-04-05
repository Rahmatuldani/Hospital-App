export enum USERS_ACTION_TYPES {
    CREATE_USERS_START = 'users/CREATE_USERS_START',
    CREATE_USERS_SUCCESS = 'users/CREATE_USERS_SUCCESS',
    CREATE_USERS_FAILED = 'users/CREATE_USERS_FAILED',
    
    UPDATE_USERS_START = 'users/UPDATE_USERS_START',
    UPDATE_USERS_SUCCESS = 'users/UPDATE_USERS_SUCCESS',
    UPDATE_USERS_FAILED = 'users/UPDATE_USERS_FAILED',

    DELETE_USERS_START = 'users/DELETE_USERS_START',
    DELETE_USERS_SUCCESS = 'users/DELETE_USERS_SUCCESS',
    DELETE_USERS_FAILED = 'users/DELETE_USERS_FAILED',
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
    photo?: string | null;
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