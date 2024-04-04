import React from 'react';
import { Outlet } from 'react-router-dom';

const NavbarComponent = React.lazy(() => import('./components/navbar'));

function App() {
    return (
        <>
            <NavbarComponent/>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default App;