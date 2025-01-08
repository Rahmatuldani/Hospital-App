import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/errors/notFound";
import adminRouter from "./admin";
import UserPrint from "@/pages/admin/users/print";

export const router = createBrowserRouter([
    adminRouter,
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "print/user/:id",
        element: <UserPrint/>
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