import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PatientsState } from './reducer';

const selectPatientsReducer = (state: RootState): PatientsState => state.patients;

export const selectPatients = createSelector(
    [selectPatientsReducer],
    (usersSlice) => usersSlice.patients
);

export const selectPatientById = (id: string) => createSelector(
    [selectPatientsReducer],
    (usersSlice) => usersSlice.patients.find(patient => patient._id === id)
);

export const selectPatientsIsLoading = createSelector(
    [selectPatientsReducer],
    (patientsSlice) => patientsSlice.isLoading
);
export const selectPatientsError = createSelector(
    [selectPatientsReducer],
    (patientsSlice) => patientsSlice.error
);