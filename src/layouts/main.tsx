import React from "react";

function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <p>Main Layout</p>
            {children}
        </>
    );
}

export default MainLayout;