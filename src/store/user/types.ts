export type UserType = {
    _id: string;
    name: string;
    email: string;
    role: string;
    polyclinic?: string;
    genre: string;
    address: string;
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