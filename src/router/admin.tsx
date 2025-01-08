import AdminPage from "@/pages/admin";
import PDFDocument from "@/pdf";
import { lazy } from "react";
import { RouteObject } from "react-router";

const Dashboard = lazy(() => import("@/pages/admin/dashboard"))
const Users = lazy(() => import("@/pages/admin/users"))
const UserDetail = lazy(() => import("@/pages/admin/users/detail"))
const UserAdd = lazy(() => import("@/pages/admin/users/add"))
const UserEdit = lazy(() => import("@/pages/admin/users/edit"))

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
        },
        {
            path: "users/add",
            element: <UserAdd/>
        },
        {
            path: "users/edit/:id",
            element: <UserEdit/>
        },
        {
            path: "users/print",
            element: <PDFDocument/>
        }
    ]
}

export default adminRouter