import { Gender } from "../user/types";

export enum BloodType {
    A = "A",
    B = "B",
    AB = "AB",
    O = "O"
}

export enum PaymentMethod {
    Cash = "Cash",
    BPJS = "BPJS"
}

export enum Religion {
    Islam = "Islam",
    Katolik = "Katolik",
    Protestan = "Protestan",
    Hindu = "Hindu",
    Budha = "Budha",
    Konghuchu = "Konghuchu"
}

export type Patient = {
    _id: string;
    medicalRecord: string;
    nik: string;
    name: string;
    gender: Gender;
    birthDate: Date;
    birthPlace: string;
    address: string;
    bloodType: BloodType | null;
    paymentMethod: PaymentMethod;
    job: string;
    partner: string;
    patientPhone: string;
    partnerPhone: string;
    partnerAddress: string;
    religion: Religion;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}