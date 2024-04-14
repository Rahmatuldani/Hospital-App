import { AnyAction } from 'redux';
import { createPatient, deletePatient, fetchPatients } from './action';
import { PatientType } from './types';
import { reducerError, reducerLoading } from '../shared/action';

export type PatientsState = {
    readonly patients: PatientType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

export const PATIENTS_INITIAL_STATE: PatientsState = {
    patients: [],
    isLoading: false,
    error: null
};

export function patientsReducer(
    state = PATIENTS_INITIAL_STATE,
    action: AnyAction
): PatientsState {
    if (reducerLoading.match(action)){
        return {...state, isLoading: true};
    }

    if (fetchPatients.match(action)) {
        return {...state, isLoading: false, patients: action.payload, error: null};
    }
    if (createPatient.match(action)) {
        return {...state, isLoading: false, patients: [...state.patients, action.payload], error: null};
    }
    if (deletePatient.match(action)) {
        const newPatients = state.patients.filter(patient => patient._id !== action.payload);
        return {...state, isLoading: false, patients: newPatients, error: null};
    }

    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}