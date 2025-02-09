import { faker } from "@faker-js/faker";
import { Gender } from "../user/types";
import { BloodType, Patient, PaymentMethod, Religion } from "./types";

export const PatientsDummy: Patient[] = [
    {
        _id: "677f3409fc13ae165e7955cb",
        medicalRecord: "9003689350",
        nik: "00012541",
        name: "Elladine Grassick",
        gender: Gender.FEMALE,
        birthDate: new Date("7/4/2024"),
        birthPlace: "Talabaan",
        address: "479 Northport Place",
        bloodType: BloodType.B,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Programmer Analyst I",
        partner: "Katie Walewski",
        patientPhone: "348-118-6235",
        partnerPhone: "235-169-6426",
        partnerAddress: "7891 Lotheville Way",
        religion: Religion.Budha,
        createdAt: new Date("9/24/2024"),
        updatedAt: new Date("4/19/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955cc",
        medicalRecord: "2945188384",
        nik: "00012542",
        name: "Wilt Woliter",
        gender: Gender.MALE,
        birthDate: new Date("3/3/2024"),
        birthPlace: "Lahoysk",
        address: "4 Florence Alley",
        bloodType: BloodType.O,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Budget/Accounting Analyst I",
        partner: "Antonino Getley",
        patientPhone: "412-735-4376",
        partnerPhone: "672-832-7472",
        partnerAddress: "4046 Rigney Way",
        religion: Religion.Protestan,
        createdAt: new Date("3/3/2024"),
        updatedAt: new Date("11/25/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955cd",
        medicalRecord: "1408798905",
        nik: "00012543",
        name: "Mabelle Wevell",
        gender: Gender.FEMALE,
        birthDate: new Date("1/18/2024"),
        birthPlace: "Trélazé",
        address: "559 Eagan Point",
        bloodType: BloodType.B,
        paymentMethod: PaymentMethod.BPJS,
        bpjs: null,
        job: "Help Desk Technician",
        partner: "Davita Habbijam",
        patientPhone: "426-813-7121",
        partnerPhone: "233-124-8860",
        partnerAddress: "3 7th Court",
        religion: Religion.Hindu,
        createdAt: new Date("7/23/2024"),
        updatedAt: new Date("7/20/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955ce",
        medicalRecord: "0982672896",
        nik: "00012544",
        name: "Sumner Corsor",
        gender: Gender.MALE,
        birthDate: new Date("10/2/2024"),
        birthPlace: "Mikulčice",
        address: "5633 Forest Dale Alley",
        bloodType: null,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Speech Pathologist",
        partner: "Osborn Mattheissen",
        patientPhone: "780-346-1642",
        partnerPhone: "568-306-0012",
        partnerAddress: "05250 Steensland Parkway",
        religion: Religion.Islam,
        createdAt: new Date("4/18/2024"),
        updatedAt: new Date("5/2/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955cf",
        medicalRecord: "4198089248",
        nik: "00012545",
        name: "Zoe Anthill",
        gender: Gender.FEMALE,
        birthDate: new Date("4/1/2024"),
        birthPlace: "Hamburg Winterhude",
        address: "86 Westport Trail",
        bloodType: BloodType.A,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Biostatistician II",
        partner: "Kerrill Viollet",
        patientPhone: "606-373-6944",
        partnerPhone: "989-882-2971",
        partnerAddress: "1 Hovde Road",
        religion: Religion.Budha,
        createdAt: new Date("8/7/2024"),
        updatedAt: new Date("9/12/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955d0",
        medicalRecord: "9278819859",
        nik: "00012546",
        name: "Markos Lockey",
        gender: Gender.MALE,
        birthDate: new Date("3/16/2024"),
        birthPlace: "Shchukino",
        address: "66 Jackson Park",
        bloodType: BloodType.B,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Internal Auditor",
        partner: "Husain Arkle",
        patientPhone: "684-585-0473",
        partnerPhone: "756-354-9550",
        partnerAddress: "2486 Loomis Trail",
        religion: Religion.Hindu,
        createdAt: new Date("2/29/2024"),
        updatedAt: new Date("5/5/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955d1",
        medicalRecord: "6823350172",
        nik: "00012547",
        name: "Virgie Doughartie",
        gender: Gender.MALE,
        birthDate: new Date("8/5/2024"),
        birthPlace: "Aasiaat",
        address: "7842 Schurz Street",
        bloodType: BloodType.O,
        paymentMethod: PaymentMethod.BPJS,
        bpjs: null,
        job: "Electrical Engineer",
        partner: "Torrence Escot",
        patientPhone: "435-113-5088",
        partnerPhone: "483-503-6214",
        partnerAddress: "70164 Corry Court",
        religion: Religion.Islam,
        createdAt: new Date("4/23/2024"),
        updatedAt: new Date("8/5/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955d2",
        medicalRecord: "6198004104",
        nik: "00012548",
        name: "Saw Hellier",
        gender: Gender.MALE,
        birthDate: new Date("8/15/2024"),
        birthPlace: "Pelotas",
        address: "629 New Castle Road",
        bloodType: BloodType.A,
        paymentMethod: PaymentMethod.BPJS,
        bpjs: null,
        job: "General Manager",
        partner: "Arthur Jennison",
        patientPhone: "674-920-7632",
        partnerPhone: "405-743-0400",
        partnerAddress: "86 Transport Place",
        religion: Religion.Konghuchu,
        createdAt: new Date("7/15/2024"),
        updatedAt: new Date("1/15/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955d3",
        medicalRecord: "8331004957",
        nik: "00012549",
        name: "Gerome Basset",
        gender: Gender.MALE,
        birthDate: new Date("10/23/2024"),
        birthPlace: "São Domingos de Rana",
        address: "262 Browning Junction",
        bloodType: null,
        paymentMethod: PaymentMethod.BPJS,
        bpjs: null,
        job: "Speech Pathologist",
        partner: "Emelen Ward",
        patientPhone: "902-359-7613",
        partnerPhone: "960-138-9802",
        partnerAddress: "04 Sachs Parkway",
        religion: Religion.Konghuchu,
        createdAt: new Date("7/7/2024"),
        updatedAt: new Date("5/12/2024"),
        deletedAt: null
    },
    {
        _id: "677f3409fc13ae165e7955d4",
        medicalRecord: "1784729558",
        nik: "00012550",
        name: "Bernard Essam",
        gender: Gender.MALE,
        birthDate: new Date("7/11/2024"),
        birthPlace: "Ojo de Agua",
        address: "08173 Spohn Crossing",
        bloodType: BloodType.O,
        paymentMethod: PaymentMethod.Cash,
        bpjs: null,
        job: "Occupational Therapist",
        partner: "Richmond Hursthouse",
        patientPhone: "337-391-0632",
        partnerPhone: "272-138-7617",
        partnerAddress: "587 Kinsman Junction",
        religion: Religion.Katolik,
        createdAt: new Date("10/28/2024"),
        updatedAt: new Date("12/22/2024"),
        deletedAt: null
    }
]

export const PatientDummy: Patient = {
    _id: faker.database.mongodbObjectId(),
    medicalRecord: faker.string.numeric(10),
    nik: faker.string.numeric(16),
    name: faker.person.fullName(),
    gender: faker.helpers.arrayElement(Object.values(Gender)),
    birthDate: faker.date.birthdate(),
    birthPlace: faker.location.city(),
    address: faker.location.streetAddress(),
    bloodType: faker.helpers.arrayElement(Object.values(BloodType)),
    paymentMethod: faker.helpers.arrayElement(Object.values(PaymentMethod)),
    bpjs: faker.string.numeric(20),
    job: faker.person.jobTitle(),
    partner: faker.person.fullName(),
    patientPhone: faker.phone.number({ style: 'national' }),
    partnerPhone: faker.phone.number({ style: 'national' }),
    partnerAddress: faker.location.streetAddress(),
    religion: faker.helpers.arrayElement(Object.values(Religion)),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
}