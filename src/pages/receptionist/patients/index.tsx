import { Button, Card, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaSortDown, FaUserInjured } from 'react-icons/fa6';
import LoadingComponent from '../../../components/loading';
import DataTable, { TableColumn } from 'react-data-table-component';
import { PatientType } from '../../../store/patient/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectPatients, selectPatientsIsLoading } from '../../../store/patient/selector';
import useState from '../../../hooks/useState';
import Alert from '../../../utils/alert';
// import { useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PatientDetail from './detail';
import { DeletePatientFunction } from '../../../store/patient/action';

function Patients() {
    const patients: PatientType[] = useSelector(selectPatients);
    const loading = useSelector(selectPatientsIsLoading);
    const [filter, setFilter] = useState<string>('');
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    function handleDelete(id: string, name: string) {
        Alert({ title: 'Delete patient', text: `Are you sure to delete ${name}?`, icon: 'warning', cancelButton: true, confirmText: 'Delete' })
            .then((result) => {
                if (result.isConfirmed) {
                    DeletePatientFunction(dispatch, id)
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

    const columns: TableColumn<PatientType>[] = [
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true
        },
        {
            name: 'BPJS',
            selector: row => row.bpjs ?? '-',
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='d-flex gap-1'>
                    <PatientDetail patient={row}/>

                    {/* <OverlayTrigger
                        placement='top'
                        overlay={
                            <Tooltip id='editTooltip'>Edit</Tooltip>
                        }
                    >
                        <Button variant='icon' className='btn-transparent-dark btn-datatable' onClick={() => navigate(`/administrator/users/edit/${row._id}`)}>
                            <FaEdit />
                        </Button>
                    </OverlayTrigger> */}
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

    const filterPatients: PatientType[] = patients.filter((patient) => patient.bpjs?.toLowerCase().includes(filter.toLowerCase()) || 
        patient._id.includes(filter) || patient.name.toLowerCase().includes(filter.toLowerCase())
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
                                        <FaUserInjured />
                                    </div>
                                    Patients
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
                                data={filterPatients}
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

export default Patients;