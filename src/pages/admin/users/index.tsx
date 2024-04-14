import { Button, Card, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaUserDoctor } from 'react-icons/fa6';
import { UserType } from '../../../store/user/types';
import DataTable, { TableColumn } from 'react-data-table-component';
import { FiTrash2 } from 'react-icons/fi';
import { FaEdit, FaSortDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, selectUsersIsLoading } from '../../../store/user/selector';
import useState from '../../../hooks/useState';
import Alert from '../../../utils/alert';
import { DeleteUserFunction } from '../../../store/user/action';
import UserDetail from './detail';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import LoadingComponent from '../../../components/loading';
import { Dispatch } from 'redux';

function Users(): React.ReactNode {
    const users: UserType[] = useSelector(selectUsers);
    const loading: boolean = useSelector(selectUsersIsLoading);
    const [filter, setFilter] = useState<string>('');
    const navigate: NavigateFunction = useNavigate();
    const dispatch: Dispatch = useDispatch();

    function handleDelete(id: string, name: string): void {
        Alert({ title: 'Delete user', text: `Are you sure to delete ${name}?`, icon: 'warning', cancelButton: true, confirmText: 'Delete' })
            .then((result) => {
                if (result.isConfirmed) {
                    DeleteUserFunction(dispatch, id)
                        .then(result => {
                            Alert({
                                title: 'Success',
                                icon: 'success',
                                text: result
                            });
                        })
                        .catch((error: Error) => {
                            Alert({
                                title: 'Error',
                                icon: 'error',
                                text: error.message,
                            });
                        });
                }
            });
    }

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
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true
        },
        {
            name: 'Polyclinic',
            selector: row => row.polyclinic ?? '-',
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='d-flex gap-1'>
                    <UserDetail user={row}/>

                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id='editTooltip'>Edit</Tooltip>
                        }
                    >
                        <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => navigate(`/administrator/users/edit/${row._id}`)}>
                            <FaEdit />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id='deleteTooltip'>Delete</Tooltip>
                        }
                    >
                        <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => handleDelete(row._id, row.name)}>
                            <FiTrash2 />
                        </Button>
                    </OverlayTrigger>
                </div>
            )
        },
    ];

    const filterUsers: UserType[] = users.filter((user) => user.email.toLowerCase().includes(filter.toLowerCase()) || 
        user._id.includes(filter) || user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <main>
            <header className='page-header page-header-dark bg-gradient-primary-to-secondary pb-10'>
                <Container>
                    <div className='page-header-content pt-4'>
                        <Row className='align-items-center justify-content-between'>
                            <Col xs='auto' className=' mt-4'>
                                <h1 className='page-header-title'>
                                    <div className='page-header-icon'>
                                        <FaUserDoctor />
                                    </div>
                                    Users
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className='mt-n10'>
                <Card className='mb-4 card-header-actions'>
                    <Card.Header>
                        List
                        <Form.Control style={{ maxWidth: '400px' }} placeholder='Search' onChange={(e) => setFilter(e.target.value)} />
                    </Card.Header>
                    <Card.Body>
                        {loading ? (
                            <LoadingComponent/>
                        ) : (
                            <DataTable
                                columns={columns}
                                data={filterUsers}
                                pagination
                                sortIcon={<FaSortDown/>}
                                responsive
                                striped
                                highlightOnHover
                            />
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;
