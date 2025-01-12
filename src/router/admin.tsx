import AdminPage from "@/pages/admin";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Dashboard = lazy(() => import("@/pages/admin/dashboard"))

const Users = lazy(() => import("@/pages/admin/users"))
const UserDetail = lazy(() => import("@/pages/admin/users/detail"))
const UserAdd = lazy(() => import("@/pages/admin/users/add"))
const UserEdit = lazy(() => import("@/pages/admin/users/edit"))

const Patients = lazy(() => import("@/pages/admin/patients"))
const PatientDetail = lazy(() => import("@/pages/admin/patients/detail"))
const PatientAdd = lazy(() => import("@/pages/admin/patients/add"))
const PatientEdit = lazy(() => import("@/pages/admin/patients/edit"))

const adminRouter: RouteObject = {
    path: "administrator",
    element: <AdminPage/>,
    children: [
        {
            path: "",
            element: <Dashboard/>
        }, {
            path: "users",
            element: <Users/>
        }, {
            path: "users/detail/:id",
            element: <UserDetail/>
        }, {
            path: "users/add",
            element: <UserAdd/>
        }, {
            path: "users/edit/:id",
            element: <UserEdit/>
        }, {
            path: "patients",
            element: <Patients/>
        }, {
            path: "patients/detail/:id",
            element: <PatientDetail/>
        }, {
            path: "patients/add",
            element: <PatientAdd/>
        }, {
            path: "patients/edit/:id",
            element: <PatientEdit/>
        }
    ]
}

export default adminRouter