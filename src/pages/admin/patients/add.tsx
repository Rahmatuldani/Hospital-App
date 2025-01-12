import { BloodType, Patient, PaymentMethod, Religion } from "@/data/patient/types";
import { Gender } from "@/data/user/types";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

type PatientFormType = Omit<Patient, "medicalRecord">

function PatientAdd() {
    const {control, handleSubmit, formState: {errors}} = useForm<PatientFormType>()
    const navigate = useNavigate()

    const formSubmit: SubmitHandler<PatientFormType> = () => {
        Swal.fire({
            title: "Success",
            icon: "success",
            text: "Add patient success"
        }).then(response => {
            if (response.isConfirmed) {
                navigate('/administrator/patients')
            }
        })
    }

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/administrator/patients"}>Patient List</NavLink>
                    </li>
                    <Breadcrumb.Item active>Add Patient</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>Add Patient</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(formSubmit)}>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="nik"
                                        defaultValue=""
                                        rules={{
                                            required: "Please input patient NIK",
                                            pattern: {value: /^\d+$/, message: "Please input a valid NIK"},
                                            minLength: {value: 16, message: "Please input a valid NIK"},
                                            maxLength: {value: 16, message: "Please input a valid NIK"}
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="nik">
                                                <Form.Label>NIK</Form.Label>
                                                <Form.Control placeholder="input NIK" {...field}/>
                                                {errors.nik && <span className="text-danger small">{errors.nik.message}</span>}
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="name"
                                        defaultValue=""
                                        rules={{
                                            required: "Please input patient name"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control placeholder="input Name" {...field}/>
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
                                        name="birthDate"
                                        rules={{
                                            required: "Please input patient birth date",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="birth-date">
                                                <Form.Label>Birth Date</Form.Label>
                                                <Form.Control type="date" {...field} value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}/>
                                                {errors.birthDate && <span className="text-danger small">{errors.birthDate.message}</span>}
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="birthPlace"
                                        defaultValue=""
                                        rules={{
                                            required: "Please input patient birth place"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="birth-place">
                                                <Form.Label>Birth Place</Form.Label>
                                                <Form.Control placeholder="input birth place" {...field}/>
                                                {errors.birthPlace && <span className="text-danger small">{errors.birthPlace.message}</span>}
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
                                            required: "Please input patient address",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="address">
                                                <Form.Label>Address</Form.Label>
                                                <textarea className="form-control" rows={3} {...field} />
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
                                                defaultValue={Gender.MALE}
                                                render={({field}) => (
                                                    <Form.Group controlId="gender">
                                                        <Form.Label>Gender</Form.Label>
                                                        <Form.Check
                                                            type="radio"
                                                            id="user-gender-male"
                                                            label="Male"
                                                            value={Gender.MALE}
                                                            checked={field.value === Gender.MALE}
                                                            onChange={(e) => field.onChange(e.target.value)}
                                                            className="ml-1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            id="user-gender-female"
                                                            label="Female"
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
                                                defaultValue={BloodType.A}
                                                render={({field}) => (
                                                    <Form.Group controlId="blood-type">
                                                        <Form.Label>Blood Type</Form.Label>
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
                                                                    label="Unknown"
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
                                            required: "Please input patient job",
                                        }}
                                        defaultValue=""
                                        render={({field}) => (
                                            <Form.Group controlId="job">
                                                <Form.Label>Job</Form.Label>
                                                <Form.Control placeholder="input job" {...field}/>
                                                {errors.job && <span className="text-danger small">{errors.job.message}</span>}
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="patientPhone"
                                        defaultValue=""
                                        rules={{
                                            required: "Please input patient phone",
                                            pattern: {value: /^\d+$/, message: "Please input a valid phone number"}
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="patient-phone">
                                                <Form.Label>Patient Phone</Form.Label>
                                                <Form.Control placeholder="input patient phone" {...field}/>
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
                                        defaultValue={Religion.Islam}
                                        render={({field}) => (
                                            <Form.Group controlId="relision">
                                                <Form.Label>Religion</Form.Label>
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
                                        defaultValue={PaymentMethod.Cash}
                                        render={({field}) => (
                                            <Form.Group controlId="payment-method">
                                                <Form.Label>Payment Method</Form.Label>
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
                                        defaultValue=""
                                        rules={{
                                            required: "Please input patient partner"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner">
                                                <Form.Label>Partner</Form.Label>
                                                <Form.Control placeholder="input patient partner" {...field}/>
                                                {errors.partner && <span className="text-danger small">{errors.partner.message}</span>}
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="partnerPhone"
                                        defaultValue=""
                                        rules={{
                                            required: "Please input partner phone",
                                            pattern: {value: /^\d+$/, message: "Please input a valid phone number"}
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner-phone">
                                                <Form.Label>Partner Phone</Form.Label>
                                                <Form.Control placeholder="input partner phone" {...field}/>
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
                                            required: "Please input partner address",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner-address">
                                                <Form.Label>Partner Address</Form.Label>
                                                <textarea className="form-control" rows={3} {...field} />
                                                {errors.partnerAddress && <span className="text-danger small">{errors.partnerAddress.message}</span>}
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" className="mr-2">Submit</Button>
                            <Button type="button" variant="danger" onClick={() => navigate(-1)}>Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default PatientAdd;