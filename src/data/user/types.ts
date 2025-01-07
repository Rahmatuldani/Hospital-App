export enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}

export enum UserRole {
    ADMINISTRATOR = "Administrator",
    RECEPTIONIST = "Receptionist",
    LOGISTIC = "Logistic",
    DOCTOR = "Doctor",
    PHARMACIST = "Pharmacist",
    CASHIER = "Cashier"
}

export type User = {
    _id: string;
    np: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    gender: Gender;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}