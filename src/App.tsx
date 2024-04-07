import React from 'react';
import { Outlet } from 'react-router-dom';
import LoadingComponent from './components/loading';

const NavbarComponent = React.lazy(() => import('./components/navbar'));

function App() {
    document.body.className = 'nav-fixed';

    return (
        <>
            <React.Suspense fallback={<LoadingComponent/>}>
                <NavbarComponent/>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default App;