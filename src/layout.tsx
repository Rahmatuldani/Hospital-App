import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </React.Suspense>
    );
}

export default AppLayout;