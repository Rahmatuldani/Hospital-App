import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/login';

const Routers = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </>
    )
);

export default Routers;