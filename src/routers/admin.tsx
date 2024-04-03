import { Route } from 'react-router-dom';
import AdminLayout from '../pages/admin';
import React from 'react';

const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));

function AdminRouters() {
    return (
        <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default AdminRouters;