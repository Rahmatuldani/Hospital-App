import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/login';
import AdminRouters from './admin';

const NotFoundPage = React.lazy(() => import('../pages/errors/notFound'));

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            {AdminRouters()}
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    )
);

export default Routers;