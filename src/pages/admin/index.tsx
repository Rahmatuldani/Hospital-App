import React from 'react';
import { Outlet } from 'react-router-dom';
import LoadinComponent from '../../components/loading';

const Sidebar = React.lazy(() => import('../../components/sidebar'));
const SidebarItems = React.lazy(() => import('./sidebar'));

function AdminLayout() {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar items={<SidebarItems/>} role='Administrator'/>
            </div>
            <div id="layoutSidenav_content">
                <React.Suspense fallback={<LoadinComponent/>}>
                    <Outlet />
                </React.Suspense>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">
                                Copyright &#xA9; 2024 &#8226; Hospital App
                            </div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy </a>
                                &#8226;
                                <a href="#!"> Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AdminLayout;