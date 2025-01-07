import AdminPage from "@/pages/admin";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Dashboard = lazy(() => import("@/pages/admin/dashboard"))
const Users = lazy(() => import("@/pages/admin/users"))
const UserDetail = lazy(() => import("@/pages/admin/users/detail"))

const adminRouter: RouteObject = {
    path: "administrator",
    element: <AdminPage/>,
    children: [
        {
            path: "",
            element: <Dashboard/>
        },
        {
            path: "users",
            element: <Users/>
        },
        {
            path: "users/detail/:id",
            element: <UserDetail/>
        }
    ]
}

export default adminRouter