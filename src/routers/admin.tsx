import { Route } from 'react-router-dom';
import React from 'react';

const AdminLayout = React.lazy(() => import('../pages/admin'));
const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));
const Users = React.lazy(() => import('../pages/admin/users'));

function AdminRouters() {
    return (
        <Route path='administrator' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='users' element={<Users/>}/>
        </Route>
    );
}

export default AdminRouters;