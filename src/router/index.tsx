import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";

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
    }, {
        path: "",
        element: <App/>
    }
])