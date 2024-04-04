import { Button, Card, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaUserDoctor } from 'react-icons/fa6';
import { UserType } from '../../../store/user/types';
import DataTable, { TableColumn } from 'react-data-table-component';
import { FiTrash2 } from 'react-icons/fi';
import { FaSortDown } from 'react-icons/fa';

function Users() {
    const users: UserType[] = [
        {
            _id: '1',
            address: 'Testing address',
            email: 'testing@gmail.com',
            genre: 'Laki-laki',
            name: 'Testing',
            phone: '08123456789',
            role: 'Administrator',
            photo: null
        }
    ];

    const columns: TableColumn<UserType>[] = [
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Action',
            cell: () => (
                <div className="d-flex gap-1">
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id="deleteTooltip">Delete</Tooltip>
                        }
                    >
                        <Button variant="icon" className="btn-transparent-dark btn-datatable">
                            <FiTrash2 />
                        </Button>
                    </OverlayTrigger>
                </div>
            )
        },
    ];
    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <Container>
                    <div className="page-header-content pt-4">
                        <Row className="align-items-center justify-content-between">
                            <Col xs="auto" className=" mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon">
                                        <FaUserDoctor />
                                    </div>
                                    Users
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className="mt-n10">
                <Card className='mb-4 card-header-actions'>
                    <Card.Header>
                        List
                        <Form.Control style={{ maxWidth: '400px' }} placeholder="Search" onChange={(e) => console.log(e)} />
                    </Card.Header>
                    <Card.Body>
                        <DataTable
                            columns={columns}
                            data={users}
                            pagination
                            sortIcon={<FaSortDown/>}
                            responsive
                            striped
                            highlightOnHover
                        />
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;
