import { Route } from 'react-router-dom';
import React from 'react';

const ReceptionistLayout = React.lazy(() => import('../pages/receptionist'));
const Dashboard = React.lazy(() => import('../pages/receptionist/dashboard'));

function ReceptionistRouters() {
    return (
        <Route path='receptionist' element={<ReceptionistLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default ReceptionistRouters;