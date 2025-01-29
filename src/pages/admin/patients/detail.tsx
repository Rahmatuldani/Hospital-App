import LoadingComponent from "@/components/loading";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router";
import { readableDate } from "@/lib/convert";
import { FiEdit, FiPrinter, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Patient } from "@/data/patient/types";
import { PatientsDummy } from "@/data/patient/dummy";

function PatientDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const dummy: Patient[] = PatientsDummy;
    const [data, setData] = useState<Patient | undefined>(undefined)
    const navigate = useNavigate()

    function handleDelete() {
        Swal.fire({
            title: "Delete",
            icon: "warning",
            text: `Are you sure to delete ${data?.name} data?`
        }).then(response => {
            if (response.isConfirmed) {
                Swal.fire({
                    title: "Delete",
                    icon: "success",
                    text: "Patient data has been deleted"
                }).then(response => {
                    if (response.isConfirmed) {
                        navigate('/administrator/patients')
                    }
                })
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            const select = dummy.find(patient => patient._id === id)
            setData(select)
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/administrator/patients"}>Patient List</NavLink>
                    </li>
                    <Breadcrumb.Item active>Patient Detail</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="card-header-actions">
                    <Card.Header>
                        Patient Detail
                        <div>
                            <Button className="btn-teal mr-2" variant="icon" onClick={() => navigate(`/administrator/patients/edit/${data?._id}`)}>
                                <FiEdit/>
                            </Button>
                            <Button className="btn-warning mr-2" variant="icon" onClick={() => window.open(`${window.location.origin}/print/patient/${data?._id}`, "_blank")}>
                                <FiPrinter/>
                            </Button>
                            <Button className="btn-danger" variant="icon" onClick={handleDelete}>
                                <FiTrash2/>
                            </Button>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        {loading ? 
                            <LoadingComponent/>
                        :
                            <Form>
                                <Form.Group as={Row} controlId="medical-record">
                                    <Form.Label column sm={2}>Medical Record</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.medicalRecord}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="name">
                                    <Form.Label column sm={2}>Name</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.name}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="birthDate">
                                    <Form.Label column sm={2}>Birth Date</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={readableDate(data?.birthDate)}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="birthPlace">
                                    <Form.Label column sm={2}>Birth Place</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.birthPlace}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="gender">
                                    <Form.Label column sm={2}>Gender</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.gender}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="address">
                                    <Form.Label column sm={2}>Address</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.address}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="blood-type">
                                    <Form.Label column sm={2}>Blood Type</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.bloodType || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="payment-method">
                                    <Form.Label column sm={2}>Payment Method</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.paymentMethod}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="job">
                                    <Form.Label column sm={2}>Job</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.job || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner">
                                    <Form.Label column sm={2}>Partner</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partner}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="patient-phone">
                                    <Form.Label column sm={2}>Patient Phone</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.patientPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-phone">
                                    <Form.Label column sm={2}>Partner Phone</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partnerPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-address">
                                    <Form.Label column sm={2}>Partner Address</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partnerAddress}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="religion">
                                    <Form.Label column sm={2}>Religion</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={data?.religion}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default PatientDetail;