import { Outlet } from "react-router";
import MainLayout from "@/layouts/main";

function AdminPage() {
    return (
        <MainLayout>
            <p>Admin Page</p>
            <Outlet/>
        </MainLayout>
    );
}

export default AdminPage;