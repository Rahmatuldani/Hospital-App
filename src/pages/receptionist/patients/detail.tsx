import { Button, Col, Form, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import useState from '../../../hooks/useState';
import { FaClipboardList } from 'react-icons/fa';
import { PatientType } from '../../../store/patient/types';

interface DetailProps {
    patient: PatientType
}

function PatientDetail({ patient }: DetailProps) {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip id='detailTooltip'>Detail</Tooltip>
                }
            >
                <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => setShow(true)}>
                    <FaClipboardList />
                </Button>
            </OverlayTrigger>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>Patient Detail</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId='medicalRecord'>
                            <Form.Label column sm='4'>
                                Medical Record
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient._id} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='bpjs'>
                            <Form.Label column sm='4'>
                                BPJS
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.bpjs ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='name'>
                            <Form.Label column sm='4'>
                                Name
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.name} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='birthPlace'>
                            <Form.Label column sm='4'>
                                Birth Place
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.birthPlace} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='birthDate'>
                            <Form.Label column sm='4'>
                                Birth Date
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.birthDate} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='gender'>
                            <Form.Label column sm='4'>
                                Gender
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.gender} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='phone'>
                            <Form.Label column sm='4'>
                                Phone
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.phone} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='address'>
                            <Form.Label column sm='4'>
                                Address
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={patient.address} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PatientDetail;