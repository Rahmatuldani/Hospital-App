import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <>
            Admin Layout
            <React.Suspense fallback={<div>Loading</div>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default AdminLayout;