import { Dispatch } from 'redux';
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer';
import { PATIENTS_ACTION_TYPES, PatientType } from './types';
import { reducerError, reducerLoading } from '../shared/action';
import Patients from '../../data/patients.json';
import { generateRandomString } from '../../utils/convert';

// Begin Fetch Patients
export type FetchPatients = ActionWithPayload<PATIENTS_ACTION_TYPES.FETCH_PATIENTS, PatientType[]>;
export const fetchPatients = withMatcher(
    (patients: PatientType[]): FetchPatients => createAction(PATIENTS_ACTION_TYPES.FETCH_PATIENTS, patients)
);

export function FetchPatientsFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const patients: PatientType[] = Patients;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(fetchPatients(patients));
    
                return resolve('Fetch patients success');
            }
    
            const error: Error = new Error('Fetch patients failed');
            dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Fetch Patients

// Begin Create Patient
export type CreatePatient = ActionWithPayload<PATIENTS_ACTION_TYPES.CREATE_PATIENT, PatientType>;
export const createPatient = withMatcher(
    (patient: PatientType): CreatePatient => createAction(PATIENTS_ACTION_TYPES.CREATE_PATIENT, patient)
);

export function CreatePatientFunction(dispatch: Dispatch, patient: PatientType): Promise<string> {
    dispatch(reducerLoading());
    patient._id = generateRandomString();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(createPatient(patient));
    
                return resolve('Create patient success');
            }
    
            const error: Error = new Error('Create patient failed');
            dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Create Patient

// Begin Delete Patient
export type DeletePatient = ActionWithPayload<PATIENTS_ACTION_TYPES.DELETE_PATIENTS, string>;
export const deletePatient = withMatcher(
    (id: string): DeletePatient => createAction(PATIENTS_ACTION_TYPES.DELETE_PATIENTS, id)
);

export function DeletePatientFunction(dispatch: Dispatch, id: string): Promise<string> {
    dispatch(reducerLoading());

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10 + 60;
            if (result === 70) {
                dispatch(deletePatient(id));
    
                return resolve('Delete patient success');
            }
    
            const error: Error = new Error('Delete patient failed');
            dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
// End Delete Patient