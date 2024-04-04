import React from 'react';
import { Outlet } from 'react-router-dom';

const NavbarComponent = React.lazy(() => import('./components/navbar'));

function App() {
    document.body.className = 'nav-fixed';

    return (
        <>
            <NavbarComponent/>
            <Outlet/>
        </>
    );
}

export default App;