import React from "react";

function SidebarLayout({children}: {children: React.ReactNode}) {
    return (
        <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
                {children}
            </div>
            <div className="sidenav-footer">
                <div className="sidenav-footer-content">
                    <div className="sidenav-footer-subtitle">Logged in as:</div>
                    <div className="sidenav-footer-title">Testing</div>
                </div>
            </div>
        </nav>
    );
}

export default SidebarLayout;