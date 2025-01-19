import Receptionist from "@/pages/receptionist";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Dashboard = lazy(() => import("@/pages/receptionist/dashboard"))

const receptionistRouter: RouteObject = {
    path: "receptionist",
    element: <Receptionist/>,
    children: [
        {
            path: "",
            element: <Dashboard/>
        }
    ]
}

export default receptionistRouter;