import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { FaUserDoctor } from 'react-icons/fa6';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Alert from '../../../utils/alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EmptyToNull } from '../../../utils/convert';
import { selectPatientsIsLoading } from '../../../store/patient/selector';
import { PatientType } from '../../../store/patient/types';
import { CreatePatientFunction } from '../../../store/patient/action';

function AddPatient() {
    const { handleSubmit, control, formState: { errors } } = useForm<PatientType>();
    const loading = useSelector(selectPatientsIsLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const FormSubmit: SubmitHandler<PatientType> = (data) => {
        const formData = EmptyToNull(data);
        
        CreatePatientFunction(dispatch, formData as PatientType)
            .then(result => {
                Alert({
                    title: 'Success',
                    icon: 'success',
                    text: result
                }).then(result => {
                    if (result.isConfirmed) {
                        navigate('/receptionist/patients');
                    }
                });
            })
            .catch((error: Error) => {
                Alert({
                    title: 'Error',
                    icon: 'error',
                    text: error.message,
                });
            });
    };
    
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
                                    Patients
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className='mt-n10'>
                <Card className='mb-4'>
                    <Card.Header>Add</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(FormSubmit)}>
                            <Row className='mb-3'>
                                <Controller
                                    control={control}
                                    name='bpjs'
                                    defaultValue=''
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputBpjs'>
                                            <Form.Label className='small mb-1'>BPJS</Form.Label>
                                            <Form.Control placeholder='Enter BPJS' onChange={onChange} onBlur={onBlur} value={value ?? ''}/>
                                        </Form.Group>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='name'
                                    rules={{
                                        required: 'Name is required',
                                    }}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputName'>
                                            <Form.Label className='small mb-1'>Name</Form.Label>
                                            <Form.Control placeholder='Enter name' {...field}/>
                                            {errors.name && <span className='small text-danger'>{errors.name.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Controller
                                    control={control}
                                    name='birthPlace'
                                    rules={{
                                        required: 'Birth Place is required',
                                    }}
                                    defaultValue=''
                                    render={({field}) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputBurthPlace'>
                                            <Form.Label className='small mb-1'>Birth Place</Form.Label>
                                            <Form.Control placeholder='Enter birth place' {...field}/>
                                            {errors.birthPlace && <span className='small text-danger'>{errors.birthPlace.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='birthDate'
                                    rules={{
                                        required: 'Birth Date is required',
                                    }}
                                    defaultValue=''
                                    render={({field}) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputBurthDate'>
                                            <Form.Label className='small mb-1'>Birth Date</Form.Label>
                                            <Form.Control type='date' {...field}/>
                                            {errors.birthDate && <span className='small text-danger'>{errors.birthDate.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Controller
                                    control={control}
                                    name='gender'
                                    defaultValue='Male'
                                    render={({ field: {value, onChange} }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputGender'>
                                            <Row>
                                                <Form.Label column sm={2} className='small mb-1'>Gender</Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        label='Male'
                                                        name='gender'
                                                        type='radio'
                                                        id='inline-radio-1'
                                                        checked={value === 'Male'}
                                                        onChange={() => onChange('Male')}
                                                    />
                                                    <Form.Check
                                                        label='Female'
                                                        name='gender'
                                                        type='radio'
                                                        id='inline-radio-2'
                                                        checked={value === 'Female'}
                                                        onChange={() => onChange('Female')}
                                                    />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='address'
                                    rules={{
                                        required: 'Address is required',
                                    }}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputAddress'>
                                            <Form.Label className='small mb-1'>Address</Form.Label>
                                            <Form.Control placeholder='Enter address' {...field}/>
                                            {errors.address && <span className='small text-danger'>{errors.address.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Controller
                                    control={control}
                                    name='phone'
                                    rules={{
                                        required: 'Phone is required',
                                    }}
                                    defaultValue=''
                                    render={({field}) => (
                                        <Form.Group as={Col} sm={6} className='mb-2' controlId='inputPhone'>
                                            <Form.Label className='small mb-1'>Phone</Form.Label>
                                            <Form.Control placeholder='Enter phone number' {...field}/>
                                            {errors.phone && <span className='small text-danger'>{errors.phone.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                            </Row>
                            <Form.Group className='d-flex align-items-center justify-content-end mt-4 mb-0'>
                                <Button type='submit' variant='primary' disabled={loading}>
                                    {loading ? (
                                        <Spinner animation='border' size='sm'/>
                                    ) : 'Submit'}
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default AddPatient;