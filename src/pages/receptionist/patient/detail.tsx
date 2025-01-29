import LoadingComponent from "@/components/loading";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { readableDate } from "@/lib/convert";
import { FiEdit, FiPrinter, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Patient } from "@/data/patient/types";
import { useTranslation } from "react-i18next";
import { PatientDummy } from "@/data/patient/dummy";

function PatientDetail() {
    // const { id } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Patient | undefined>(undefined)
    const navigate = useNavigate()
    const { t } = useTranslation();
    const patient: Patient = PatientDummy

    function handleDelete() {
        Swal.fire({
            title: t('delete'),
            icon: "warning",
            text: `${t('alert_delete')} ${data?.name}?`
        }).then(response => {
            if (response.isConfirmed) {
                Swal.fire({
                    title: t('deleted'),
                    icon: "success",
                    text: t('alert_delete_success')
                }).then(response => {
                    if (response.isConfirmed) {
                        navigate('/receptionist/patients')
                    }
                })
            }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setData(patient)
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/receptionist/patients"}>{t('patient_list')}</NavLink>
                    </li>
                    <Breadcrumb.Item active>{t('patient_detail')}</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="card-header-actions">
                    <Card.Header>
                        {t('patient_detail')}
                        <div>
                            <Button className="btn-teal mr-2" variant="icon" onClick={() => navigate(`/receptionist/patients/edit/${data?._id}`)}>
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
                                <Form.Group as={Row} controlId="nik">
                                    <Form.Label column sm={3}>NIK</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.nik}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="medical-record">
                                    <Form.Label column sm={3}>{t('medical_record')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.medicalRecord}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="name">
                                    <Form.Label column sm={3}>{t('name')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.name}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="birthDate">
                                    <Form.Label column sm={3}>{t('birth_place_date')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={`${data?.birthPlace} / ${readableDate(data?.birthDate)}`}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="gender">
                                    <Form.Label column sm={3}>{t('gender.info')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.gender}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="address">
                                    <Form.Label column sm={3}>{t('address')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.address}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="blood-type">
                                    <Form.Label column sm={3}>{t('blood_type')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.bloodType || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="payment-method">
                                    <Form.Label column sm={3}>{t('payment_method')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.paymentMethod}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="job">
                                    <Form.Label column sm={3}>{t('job')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.job || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner">
                                    <Form.Label column sm={3}>{t('partner')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partner}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="patient-phone">
                                    <Form.Label column sm={3}>{t('patient_phone')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.patientPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-phone">
                                    <Form.Label column sm={3}>{t('partner_phone')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partnerPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-address">
                                    <Form.Label column sm={3}>{t('partner_address')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={data?.partnerAddress}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="religion">
                                    <Form.Label column sm={3}>{t('religion')}</Form.Label>
                                    <Col sm={9}>
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