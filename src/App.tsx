import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/navbar';

function App() {
    document.body.className = 'nav-fixed';

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