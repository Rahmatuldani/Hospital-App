import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/errors/notFound";

const AdminPage = React.lazy(() => import("../pages/admin"))
const AdminDashboard = React.lazy(() => import("../pages/admin/dashboard"))

export const router = createBrowserRouter([
    {
        path: "administrator",
        element: <AdminPage/>,
        children: [
            {
                path: "",
                element: <AdminDashboard/>
            }
        ]
    },
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "",
        element: <App/>
    }, 
    {
        path: "*",
        element: <NotFoundPage/>
    }
])