import { Outlet } from "react-router";
import MainLayout from "@/layouts/main";
import SidebarLayout from "@/layouts/components/sidebar";
import Sidebar from "./sidebar";
import { Suspense } from "react";
import LoadingComponent from "@/components/loading";

function AdminPage() {
    function toggleSidebar() {
        if (window.innerWidth <= 922 && document.body.classList.contains("sidenav-toggled")) {
            document.body.classList.toggle("sidenav-toggled")
        }
    }

    return (
        <MainLayout>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <SidebarLayout>
                        <Sidebar/>
                    </SidebarLayout>
                </div>
                <div id="layoutSidenav_content" onClick={toggleSidebar}>
                    <Suspense fallback={<LoadingComponent/>}>
                        <Outlet/>
                    </Suspense>
                    <footer className="footer mt-auto footer-light">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">Copyright &#xA9; Rahmatul Ramadhani 2025</div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!">Privacy Policy </a>
                                    &#xB7;
                                    <a href="#!"> Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdminPage;