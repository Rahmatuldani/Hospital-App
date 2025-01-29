import LoadingComponent from "@/components/loading";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router";
import { readableDate } from "@/lib/convert";
import { FiEdit, FiPrinter, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Patient } from "@/data/patient/types";
import { useTranslation } from "react-i18next";
import PatientApi from "@/api/patient";

function PatientDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [patient, setPatient] = useState<Patient | undefined>(undefined);
    const navigate = useNavigate();
    const { t } = useTranslation();

    async function handleDelete() {
        Swal.fire({
            title: t('alert_title.delete'),
            icon: "warning",
            text: `${t('alert_message.delete')} ${patient?.name}?`
        }).then(async (response) => {
            if (response.isConfirmed) {
                const res = await PatientApi.deletePatient(id ?? "")
                if (res) {
                    Swal.fire({
                        title: t('alert_title.deleted'),
                        icon: "success",
                        text: t('alert_message.success.delete')
                    }).then(response => {
                        if (response.isConfirmed) {
                            navigate('/receptionist/patients')
                        }
                    })
                }
            }
        })
        
    }

    useEffect(() => {
        async function initialize() {
            const response = await PatientApi.getPatient(id ?? "")
            await setPatient(response)
            await setLoading(false)
        }
        initialize()
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
                            <Button className="btn-teal mr-2" variant="icon" onClick={() => navigate(`/receptionist/patients/edit/${patient?._id}`)}>
                                <FiEdit/>
                            </Button>
                            <Button className="btn-warning mr-2" variant="icon" onClick={() => window.open(`${window.location.origin}/print/patient/${patient?._id}`, "_blank")}>
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
                        : patient ? 
                            <Form>
                                <Form.Group as={Row} controlId="nik">
                                    <Form.Label column sm={3}>NIK</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.nik}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="medical-record">
                                    <Form.Label column sm={3}>{t('medical_record')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.medicalRecord}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="name">
                                    <Form.Label column sm={3}>{t('name')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.name}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="birthDate">
                                    <Form.Label column sm={3}>{t('birth_place_date')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={`${patient.birthPlace} / ${readableDate(new Date(patient.birthDate))}`}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="gender">
                                    <Form.Label column sm={3}>{t('gender.info')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.gender === "Male" ? t('gender.male') : t('gender.female')}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="address">
                                    <Form.Label column sm={3}>{t('address')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.address}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="blood-type">
                                    <Form.Label column sm={3}>{t('blood_type')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.bloodType || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="payment-method">
                                    <Form.Label column sm={3}>{t('payment_method')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.paymentMethod}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="job">
                                    <Form.Label column sm={3}>{t('job')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.job || "-"}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner">
                                    <Form.Label column sm={3}>{t('partner')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.partner}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="patient-phone">
                                    <Form.Label column sm={3}>{t('patient_phone')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.patientPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-phone">
                                    <Form.Label column sm={3}>{t('partner_phone')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.partnerPhone}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="partner-address">
                                    <Form.Label column sm={3}>{t('partner_address')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.partnerAddress}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="religion">
                                    <Form.Label column sm={3}>{t('religion')}</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control plaintext readOnly defaultValue={patient.religion}/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        :
                            <p>Patient not found</p>
                        }
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default PatientDetail;