import PatientApi from "@/api/patient";
import { BloodType, Patient, PaymentMethod, Religion } from "@/data/patient/types";
import { Gender } from "@/data/user/types";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

function PatientEdit() {
    const { id } = useParams();
    const {control, handleSubmit, formState: {errors}} = useForm<Patient>()
    const { t } = useTranslation();
    const [patient, setPatient] = useState<Patient | undefined>(undefined);
    const navigate = useNavigate()

    const formSubmit: SubmitHandler<Patient> = async (data) => {
        const response = await PatientApi.editPatient(id ?? "", data)
        if (response) {
            Swal.fire({
                title: t('alert_title.success'),
                icon: "success",
                text: t('alert_message.success.edit_patient')
            }).then(response => {
                if (response.isConfirmed) {
                    navigate(-1)
                }
            })
        }
    }

    useEffect(() => {
        async function initiate() {
            const response = await PatientApi.getPatient(id ?? "")
            setPatient(response)
        }
        initiate()
    }, [])

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/receptionist/patients"}>{t('patient_list')}</NavLink>
                    </li>
                    <Breadcrumb.Item active>{t('patient_edit')}</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>{t('patient_edit')}</Card.Header>
                    <Card.Body>
                        {patient ? 
                            <Form onSubmit={handleSubmit(formSubmit)}>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            disabled
                                            control={control}
                                            name="nik"
                                            defaultValue={patient.nik}
                                            rules={{
                                                required: `${t('validation.required')}`,
                                                pattern: {value: /^\d+$/, message: `${t('validation.nik')} NIK yang valid` },
                                                minLength: {value: 16, message: `${t('validation.nik')} NIK yang valid` },
                                                maxLength: {value: 16, message: `${t('validation.nik')} NIK yang valid` }
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="nik">
                                                    <Form.Label>NIK</Form.Label>
                                                    <Form.Control placeholder="Input NIK" {...field}/>
                                                    {errors.nik && <span className="text-danger small">{errors.nik.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="name"
                                            defaultValue={patient.name}
                                            rules={{
                                                required: `${t('validation.required')}`
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="name">
                                                    <Form.Label>{t('name')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('name')}`} {...field}/>
                                                    {errors.name && <span className="text-danger small">{errors.name.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="birthPlace"
                                            defaultValue={patient.birthPlace}
                                            rules={{
                                                required: `${t('validation.required')}`
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="birth-place">
                                                    <Form.Label>{t('birth_place')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('birth_place')}`} {...field}/>
                                                    {errors.birthPlace && <span className="text-danger small">{errors.birthPlace.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="birthDate"
                                            rules={{
                                                required: `${t('validation.required')}`,
                                            }}
                                            defaultValue={patient.birthDate}
                                            render={({field}) => (
                                                <Form.Group controlId="birth-date">
                                                    <Form.Label>{t('birth_date')}</Form.Label>
                                                    <Form.Control type="date" {...field} value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}/>
                                                    {errors.birthDate && <span className="text-danger small">{errors.birthDate.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="address"
                                            rules={{
                                                required: `${t('validation.required')}`,
                                            }}
                                            defaultValue={patient.address}
                                            render={({field}) => (
                                                <Form.Group controlId="address">
                                                    <Form.Label>{t('address')}</Form.Label>
                                                    <textarea className="form-control" placeholder={`Input ${t('address')}`} rows={3} {...field} />
                                                    {errors.address && <span className="text-danger small">{errors.address.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Row>
                                            <Col xs={4}>
                                                <Controller
                                                    control={control}
                                                    name="gender"
                                                    defaultValue={patient.gender}
                                                    render={({field}) => (
                                                        <Form.Group controlId="gender">
                                                            <Form.Label>{t('gender.info')}</Form.Label>
                                                            <Form.Check
                                                                type="radio"
                                                                id="user-gender-male"
                                                                label={t('gender.male')}
                                                                value={Gender.MALE}
                                                                checked={field.value === Gender.MALE}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                className="ml-1"
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                id="user-gender-female"
                                                                label={t('gender.female')}
                                                                value={Gender.FEMALE}
                                                                checked={field.value === Gender.FEMALE}
                                                                onChange={(e) => field.onChange(e.target.value)}
                                                                className="ml-1"
                                                            />
                                                        </Form.Group>
                                                    )}
                                                />
                                            </Col>
                                            <Col xs={6}>
                                                <Controller
                                                    control={control}
                                                    name="bloodType"
                                                    defaultValue={patient.bloodType}
                                                    render={({field}) => (
                                                        <Form.Group controlId="blood-type">
                                                            <Form.Label>{t('blood_type')}</Form.Label>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="blood-type-a"
                                                                        label="A"
                                                                        value={BloodType.A}
                                                                        checked={field.value === BloodType.A}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                        className="ml-1"
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="blood-type-b"
                                                                        label="B"
                                                                        value={BloodType.B}
                                                                        checked={field.value === BloodType.B}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                        className="ml-1"
                                                                    />
                                                                </Col>
                                                                <Col>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="blood-type-ab"
                                                                        label="AB"
                                                                        value={BloodType.AB}
                                                                        checked={field.value === BloodType.AB}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                        className="ml-1"
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="blood-type-o"
                                                                        label="O"
                                                                        value={BloodType.O}
                                                                        checked={field.value === BloodType.O}
                                                                        onChange={(e) => field.onChange(e.target.value)}
                                                                        className="ml-1"
                                                                    />
                                                                </Col>
                                                                <Col>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        id="blood-type-unknown"
                                                                        label={t('unknown')}
                                                                        value={undefined}
                                                                        checked={field.value === null}
                                                                        onChange={() => field.onChange(null)}
                                                                        className="ml-1"
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                    )}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="job"
                                            rules={{
                                                required: `${t('validation.required')}`,
                                            }}
                                            defaultValue={patient.job}
                                            render={({field}) => (
                                                <Form.Group controlId="job">
                                                    <Form.Label>{t('job')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('job')}`} {...field}/>
                                                    {errors.job && <span className="text-danger small">{errors.job.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="patientPhone"
                                            defaultValue={patient.patientPhone}
                                            rules={{
                                                required: `${t('validation.required')}`,
                                                pattern: {value: /^\d+$/, message: `${t('validation.phone')}` }
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="patient-phone">
                                                    <Form.Label>{t('patient_phone')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('patient_phone')}`} {...field}/>
                                                    {errors.patientPhone && <span className="text-danger small">{errors.patientPhone.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="religion"
                                            defaultValue={patient.religion}
                                            render={({field}) => (
                                                <Form.Group controlId="relision">
                                                    <Form.Label>{t('religion')}</Form.Label>
                                                    <Form.Select {...field}>
                                                        {Object.entries(Religion).map(([key, value]) => (
                                                            <option key={key} value={value}>{value}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="paymentMethod"
                                            defaultValue={patient.paymentMethod}
                                            render={({field}) => (
                                                <Form.Group controlId="payment-method">
                                                    <Form.Label>{t('payment_method')}</Form.Label>
                                                    <Form.Select {...field}>
                                                        {Object.entries(PaymentMethod).map(([key, value]) => (
                                                            <option key={key} value={value}>{value}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="partner"
                                            defaultValue={patient.partner}
                                            rules={{
                                                required: `${t('validation.required')}`
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="partner">
                                                    <Form.Label>{t('partner')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('partner')}`} {...field}/>
                                                    {errors.partner && <span className="text-danger small">{errors.partner.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="partnerPhone"
                                            defaultValue={patient.partnerPhone}
                                            rules={{
                                                required: `${t('validation.required')}`,
                                                pattern: {value: /^\d+$/, message: `${t('validation.phone')}` }
                                            }}
                                            render={({field}) => (
                                                <Form.Group controlId="partner-phone">
                                                    <Form.Label>{t('partner_phone')}</Form.Label>
                                                    <Form.Control placeholder={`Input ${t('partner_phone')}`} {...field}/>
                                                    {errors.partnerPhone && <span className="text-danger small">{errors.partnerPhone.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col sm={6}>
                                        <Controller
                                            control={control}
                                            name="partnerAddress"
                                            rules={{
                                                required: `${t('validation.required')}`,
                                            }}
                                            defaultValue={patient.partnerAddress}
                                            render={({field}) => (
                                                <Form.Group controlId="partner-address">
                                                    <Form.Label>{t('partner_address')}</Form.Label>
                                                    <textarea className="form-control" placeholder={`Input ${t('partner_address')}`} rows={3} {...field} />
                                                    {errors.partnerAddress && <span className="text-danger small">{errors.partnerAddress.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                    </Col>
                                </Row>
                                <Button type="submit" className="mr-2">{t('submit')}</Button>
                                <Button type="button" variant="danger" onClick={() => navigate(-1)}>{t('cancel')}</Button>
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

export default PatientEdit;