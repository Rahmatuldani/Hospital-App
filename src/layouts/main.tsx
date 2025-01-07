import React from "react";
import NavbarLayout from "./components/navbar";

function MainLayout({children}: {children: React.ReactNode}) {
    document.body.className = ""
    document.body.classList.add("nav-fixed")

    return (
        <>
            <NavbarLayout/>
            <p>Main Layout</p>
            {children}
        </>
    );
}

export default MainLayout;