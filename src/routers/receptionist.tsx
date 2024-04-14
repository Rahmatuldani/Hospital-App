import { Route } from 'react-router-dom';
import React from 'react';

const ReceptionistLayout = React.lazy(() => import('../pages/receptionist'));
const Dashboard = React.lazy(() => import('../pages/receptionist/dashboard'));
const Patients = React.lazy(() => import('../pages/receptionist/patients'));
const AddPatients = React.lazy(() => import('../pages/receptionist/patients/add'));

function ReceptionistRouters() {
    return (
        <Route path='receptionist' element={<ReceptionistLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='patients' element={<Patients/>}/>
            <Route path='patients/add' element={<AddPatients/>}/>
        </Route>
    );
}

export default ReceptionistRouters;