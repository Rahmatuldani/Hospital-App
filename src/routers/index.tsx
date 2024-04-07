import React from 'react';
import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Navigate, Route, useRouteError } from 'react-router-dom';
import App from '../App';
import AdminRouters from './admin';
import { UserType } from '../store/user/types';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/auth/selector';
import AppLayout from '../layout';
import ReceptionistRouters from './receptionist';

const NotFoundPage = React.lazy(() => import('../pages/errors/notFound'));
const Login = React.lazy(() => import('../pages/auth/login'));

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
        <>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<App/>} errorElement={<ErrorBoundary/>}>
                    <Route index element={<RouteRedirect/>}/>
                    {AdminRouters()}
                    {ReceptionistRouters()}
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </>
    )
);

export default Routers;