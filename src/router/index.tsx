import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/errors/notFound";
import adminRouter from "./admin";
import UserPrint from "@/pages/admin/users/print";
import PatientPrint from "@/pages/admin/patients/print";
import receptionistRouter from "./receptionist";

export const router = createBrowserRouter([
    adminRouter,
    receptionistRouter,
    {
        path: "login",
        element: <LoginPage/>
    }, {
        path: "print/user/:id",
        element: <UserPrint/>
    }, {
        path: "print/patient/:id",
        element: <PatientPrint/>
    }, {
        path: "",
        element: <App/>
    }, {
        path: "*",
        element: <NotFoundPage/>
    }
])