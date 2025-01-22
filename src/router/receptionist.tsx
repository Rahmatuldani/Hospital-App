import Receptionist from "@/pages/receptionist";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Dashboard = lazy(() => import("@/pages/receptionist/dashboard"))

const Patients = lazy(() => import("@/pages/receptionist/patient"))
const PatientAdd = lazy(() => import("@/pages/receptionist/patient/add"))

const receptionistRouter: RouteObject = {
    path: "receptionist",
    element: <Receptionist/>,
    children: [
        {
            path: "",
            element: <Dashboard/>
        },
        {
            path: "patients",
            element: <Patients/>
        },
        {
            path: "patients/add",
            element: <PatientAdd/>
        }
    ]
}

export default receptionistRouter;