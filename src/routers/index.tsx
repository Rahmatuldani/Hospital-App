import React from 'react';
import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Navigate, Route, useRouteError } from 'react-router-dom';
import App from '../App';
import AdminRouters from './admin';
import { UserType } from '../store/user/types';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/auth/selector';
import ReceptionistRouters from './receptionist';
import Login from '../pages/auth/login';
import AppLayout from '../layout';

const NotFoundPage = React.lazy(() => import('../pages/errors/notFound'));

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText} - {error.data}</h1>
    ) : (
        <h1>{String(error)}</h1>
    );
}

function RouteRedirect() {
    const user: UserType | null = useSelector(selectCurrentUser);
    if (!user) {
        return <Navigate to={'/login'} replace/>;
    }
    return <Navigate to={`/${String(user.role).toLowerCase()}`} replace/>;
}

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout/>} errorElement={<ErrorBoundary/>}>
            <Route path="/" element={<App/>}>
                <Route index element={<RouteRedirect/>}/>
                {AdminRouters()}
                {ReceptionistRouters()}
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);

export default Routers;