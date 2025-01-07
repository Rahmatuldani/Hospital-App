import React from "react";
import { NavLink } from "react-router";

function AuthLayout({children}: {children: React.ReactNode}) {
    document.body.className = ""
    document.body.classList.add("bg-primary")
    
    return (
        <>
            <p>Auth Layout</p>
            <NavLink to={"/administrator"} className={"btn btn-success"}>Login</NavLink>
            {children}
        </>
    );
}

export default AuthLayout;