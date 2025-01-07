import ErrorLayout from "@/layouts/error";
import { Col, Container, Row } from "react-bootstrap";
import Image from "@/assets/assets/img/illustrations/404-error-with-a-cute-animal.svg"
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router";

function NotFoundPage() {
    const navigate = useNavigate()

    function handleGoBack() {
        navigate(-1);
    }

    return (
        <ErrorLayout>
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center mt-4">
                                <img className="img-fluid p-4" src={Image} alt="error-img" />
                                <p className="lead">This requested URL was not found on this server.</p>
                                <a className="text-arrow-icon" onClick={handleGoBack} style={{ cursor: "pointer" }}>
                                    <FiArrowLeft className="ml-0 mr-1"/>
                                    Return
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </ErrorLayout>
    );
}

export default NotFoundPage;