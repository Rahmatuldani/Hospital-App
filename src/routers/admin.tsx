import { Route } from 'react-router-dom';
import React from 'react';

const AdminLayout = React.lazy(() => import('../pages/admin'));
const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));

function AdminRouters() {
    return (
        <Route path='/administrator' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default AdminRouters;