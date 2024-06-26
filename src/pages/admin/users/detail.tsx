import { Button, Col, Form, Modal, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import useState from '../../../hooks/useState';
import { FaClipboardList } from 'react-icons/fa';
import { UserType } from '../../../store/user/types';

interface DetailProps {
    user: UserType;
}

function UserDetail({ user }: DetailProps) {
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
                <Modal.Header closeButton>User Detail</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId='ID'>
                            <Form.Label column sm='4'>
                                ID
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user._id} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='email'>
                            <Form.Label column sm='4'>
                                Email
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.email} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='name'>
                            <Form.Label column sm='4'>
                                Name
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.name} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='role'>
                            <Form.Label column sm='4'>
                                Role
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.role} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='polyclinic'>
                            <Form.Label column sm='4'>
                                Polyclinic
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.polyclinic ?? '-'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='gender'>
                            <Form.Label column sm='4'>
                                Gender
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.gender} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='phone'>
                            <Form.Label column sm='4'>
                                Phone
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.phone} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId='address'>
                            <Form.Label column sm='4'>
                                Address
                            </Form.Label>
                            <Col sm='8'>
                                <Form.Control plaintext readOnly defaultValue={user.address ?? '-'} />
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

export default UserDetail;