import { config } from "@/config/config";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AuthLayout({children}: {children: React.ReactNode}) {
    document.body.className = ""
    document.body.classList.add("bg-primary")
    
    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                {children}
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="footer mt-auto footer-dark">
                    <Container fluid>
                        <Row>
                            <Col md={6} className="small">Copyright &#xA9; {config.meta.author} 2025</Col>
                            <Col md={6} className="text-md-right small">
                                <a href="#!">Privacy Policy </a>
                                &#xB7;
                                <a href="#!"> Terms &amp; Conditions</a>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </div>
    );
}

export default AuthLayout;