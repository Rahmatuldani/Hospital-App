import { Route } from 'react-router-dom';
import React from 'react';

const AdminLayout = React.lazy(() => import('../pages/admin'));
const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));
const Users = React.lazy(() => import('../pages/admin/users'));
const AddUser = React.lazy(() => import('../pages/admin/users/add'));
const EditUser = React.lazy(() => import('../pages/admin/users/edit'));

function AdminRouters() {
    return (
        <Route path='administrator' element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='users/add' element={<AddUser/>}/>
            <Route path='users/edit/:id' element={<EditUser/>}/>
        </Route>
    );
}

export default AdminRouters;