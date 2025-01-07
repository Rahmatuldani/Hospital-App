import React from "react";

function ErrorLayout({children}: {children: React.ReactNode}) {
    document.body.className = ""
    document.body.classList.add("bg-white")

    return (
        <div id="layoutError">
            <div id="layoutError_content">
                {children}
            </div>
            <div id="layoutError_footer">
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &#xA9; Rahmatul Ramadhani 2025</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy </a>
                                &#xB7;
                                <a href="#!"> Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default ErrorLayout;