import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "@/pages/auth/login";
import NotFoundPage from "@/pages/errors/notFound";
import adminRouter from "./admin";

export const router = createBrowserRouter([
    adminRouter,
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