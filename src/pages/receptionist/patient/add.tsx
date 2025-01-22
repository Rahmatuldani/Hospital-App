import { BloodType, Patient, PaymentMethod, Religion } from "@/data/patient/types";
import { Gender } from "@/data/user/types";
import { Breadcrumb, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

function PatientAdd() {
    const {control, handleSubmit, formState: {errors}} = useForm<Patient>()
    const navigate = useNavigate()

    const formSubmit: SubmitHandler<Patient> = (data) => {
        console.log(data);
        
        Swal.fire({
            title: "Sukses",
            icon: "success",
            text: "Tambah pasien baru berhasil"
        }).then(response => {
            if (response.isConfirmed) {
                navigate('/receptionist/patients')
            }
        })
    }

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/receptionist/patients"}>Daftar Pasien</NavLink>
                    </li>
                    <Breadcrumb.Item active>Tambah Pasien</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>Tambah Pasien</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(formSubmit)}>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="nik"
                                        defaultValue=""
                                        rules={{
                                            required: "Mohon isi data NIK pasien",
                                            pattern: {value: /^\d+$/, message: "Mohon isi data NIK yang valid"},
                                            minLength: {value: 16, message: "Mohon isi data NIK yang valid"},
                                            maxLength: {value: 16, message: "Mohon isi data NIK yang valid"}
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
                                        defaultValue=""
                                        rules={{
                                            required: "Mohon isi data nama pasien"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="name">
                                                <Form.Label>Nama</Form.Label>
                                                <Form.Control placeholder="Input nama" {...field}/>
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
                                        defaultValue=""
                                        rules={{
                                            required: "Mohon isi data tempat lahir pasien"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="birth-place">
                                                <Form.Label>Tempat lahir</Form.Label>
                                                <Form.Control placeholder="Input tempat lahir" {...field}/>
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
                                            required: "Mohon isi data tanggal lahir pasien",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="birth-date">
                                                <Form.Label>Tanggal Lahir</Form.Label>
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
                                            required: "Mohon isi data alamat pasien",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="address">
                                                <Form.Label>Alamat</Form.Label>
                                                <textarea className="form-control" placeholder="Input alamat" rows={3} {...field} />
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
                                                        <Form.Label>Jenis Kelamin</Form.Label>
                                                        <Form.Check
                                                            type="radio"
                                                            id="user-gender-male"
                                                            label="Laki-laki"
                                                            value={Gender.MALE}
                                                            checked={field.value === Gender.MALE}
                                                            onChange={(e) => field.onChange(e.target.value)}
                                                            className="ml-1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            id="user-gender-female"
                                                            label="Perempuan"
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
                                                        <Form.Label>Golongan Darah</Form.Label>
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
                                                                    label="Kosong"
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
                                            required: "Mohon isi data pekerjaan pasien",
                                        }}
                                        defaultValue=""
                                        render={({field}) => (
                                            <Form.Group controlId="job">
                                                <Form.Label>Pekerjaan</Form.Label>
                                                <Form.Control placeholder="Input pekerjaan" {...field}/>
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
                                            required: "Mohon isi data nomor telepon pasien",
                                            pattern: {value: /^\d+$/, message: "Mohon isi data nomor telepon yang valid"}
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="patient-phone">
                                                <Form.Label>Nomor Telepon</Form.Label>
                                                <Form.Control placeholder="Input nomor telepon" {...field}/>
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
                                                <Form.Label>Agama</Form.Label>
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
                                                <Form.Label>Jenis Pembayaran</Form.Label>
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
                                            required: "Mohon isi data wali pasien"
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner">
                                                <Form.Label>Wali pasien</Form.Label>
                                                <Form.Control placeholder="Input wali pasien" {...field}/>
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
                                            required: "Mohon isi data nomor telepon wali pasien",
                                            pattern: {value: /^\d+$/, message: "Mohon isi data nomor telepon yang valid"}
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner-phone">
                                                <Form.Label>Nomor Telepon Wali Pasien</Form.Label>
                                                <Form.Control placeholder="Input nomor telepon wali pasien" {...field}/>
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
                                            required: "Mohon isi data alamat wali pasien",
                                        }}
                                        render={({field}) => (
                                            <Form.Group controlId="partner-address">
                                                <Form.Label>Alamat Wali Pasien</Form.Label>
                                                <textarea className="form-control" placeholder="Input alamat wali pasien" rows={3} {...field} />
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