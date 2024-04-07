import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
        <React.Suspense>
            <Outlet/>
        </React.Suspense>
    );
}

export default AppLayout;