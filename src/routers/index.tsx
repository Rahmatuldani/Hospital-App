import React from 'react';
import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Navigate, Route, useRouteError } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/login';
import AdminRouters from './admin';

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
    const userRole: string | null = 'Administrator';
    if (!userRole) {
        return <Navigate to={'/login'} replace/>;
    }
    return <Navigate to={`/${String(userRole).toLowerCase()}`} replace/>;
}

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorBoundary/>}>
            <Route path="/" element={<App/>}>
                <Route index element={<RouteRedirect/>}/>
                {AdminRouters()}
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);

export default Routers;