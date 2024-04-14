import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingComponent from '../../components/loading';
import { UserType } from '../../store/user/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/auth/selector';
import { Dispatch } from 'redux';
import { FetchPatientsFunction } from '../../store/patient/action';

const Sidebar = React.lazy(() => import('../../components/sidebar'));
const SidebarItems = React.lazy(() => import('./sidebar'));

function ReceptionistLayout() {
    const currentUser: UserType | null = useSelector(selectCurrentUser);
    const dispatch: Dispatch = useDispatch();
    FetchPatientsFunction(dispatch);
    if (!currentUser) {
        return <Navigate to={'/login'} replace />;
    }
    if (currentUser?.role !== 'Receptionist') {
        return <Navigate to={`/${String((currentUser.role).toLowerCase())}`} replace />;
    }
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar items={<SidebarItems/>} role={currentUser.role}/>
            </div>
            <div id="layoutSidenav_content">
                <React.Suspense fallback={<LoadingComponent/>}>
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

export default ReceptionistLayout;