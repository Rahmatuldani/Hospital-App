export enum PATIENTS_ACTION_TYPES {
    FETCH_PATIENTS = 'patients/FETCH_PATIENTS',
    CREATE_PATIENT = 'patients/CREATE_PATIENT',
    UPDATE_PATIENTS = 'patients/UPDATE_PATIENTS',
    DELETE_PATIENTS = 'patients/DELETE_PATIENTS',
}

export type PatientType = {
    _id: string;
    bpjs: string | null;
    name: string;
    birthPlace: string;
    birthDate: string;
    gender: string;
    address: string;
    phone: string;
}