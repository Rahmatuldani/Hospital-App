import SidebarLayout from "@/layouts/components/sidebar";
import MainLayout from "@/layouts/main";
import Sidebar from "./sidebar";
import { Suspense } from "react";
import LoadingComponent from "@/components/loading";
import { Outlet } from "react-router";
import toggleSidebar from "@/composables/toggleSidebar";

function Receptionist() {
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

export default Receptionist;