import { Breadcrumb, Card, Container } from "react-bootstrap";
import { NavLink } from "react-router";

function PatientEdit() {
    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/administrator/patients"}>Patient List</NavLink>
                    </li>
                    <Breadcrumb.Item active>Edit Patient</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>Edit Patient Data</Card.Header>
                    <Card.Body>
                        Patient Form
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default PatientEdit;