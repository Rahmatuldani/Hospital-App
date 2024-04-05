import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { FaUserDoctor } from 'react-icons/fa6';
import { Polyclinic, UserRole, UserType } from '../../../store/user/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CreateUserFunction } from '../../../store/user/action';
import Alert from '../../../utils/alert';
import { useSelector } from 'react-redux';
import { selectUsersIsLoading } from '../../../store/user/selector';
import { useNavigate } from 'react-router-dom';
import { EmptyToNull } from '../../../utils/convert';

function AddUser() {
    const { handleSubmit, control, formState: { errors } } = useForm<UserType>();
    const loading = useSelector(selectUsersIsLoading);
    const navigate = useNavigate();

    const FormSubmit: SubmitHandler<UserType> = (data) => {
        const formData = EmptyToNull(data);
        CreateUserFunction(formData as UserType)
            .then(result => {
                Alert({
                    title: 'Success',
                    icon: 'success',
                    text: result
                }).then(result => {
                    if (result.isConfirmed) {
                        navigate('/administrator/users');
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
                                    Users
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
                                    name='email'
                                    rules={{
                                        required: 'Email is required',
                                        pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Input must be email' }
                                    }}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputEmail'>
                                            <Form.Label className='small mb-1'>Email</Form.Label>
                                            <Form.Control type='email' placeholder='Enter email address' {...field}/>
                                            {errors.email && <span className='small text-danger'>{errors.email.message}</span>}
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
                                    defaultValue=''
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputAddress'>
                                            <Form.Label className='small mb-1'>Address</Form.Label>
                                            <Form.Control placeholder='Enter address' onChange={onChange} onBlur={onBlur} value={value ?? ''}/>
                                        </Form.Group>
                                    )}
                                />
                            </Row>
                            <Row className='mb-3'>
                                <Controller
                                    control={control}
                                    name='role'
                                    rules={{
                                        required: 'Role is required'
                                    }}
                                    defaultValue=''
                                    render={({field}) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputRole'>
                                            <Form.Label className='small mb-1'>Role</Form.Label>
                                            <Form.Select aria-label='select-role' {...field}>
                                                <option value='' disabled> -- Select Role -- </option>
                                                {UserRole.map((role) => (
                                                    <option key={role} value={role}>{role}</option>
                                                ))}
                                            </Form.Select>
                                            {errors.role && <span className='small text-danger'>{errors.role.message}</span>}
                                        </Form.Group>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name='polyclinic'
                                    defaultValue=''
                                    render={({ field: { onChange, onBlur, value}}) => (
                                        <Form.Group as={Col} className='mb-2' controlId='inputPolyclinic'>
                                            <Form.Label className='small mb-1'>Polyclinic</Form.Label>
                                            <Form.Select aria-label='select-polyclinic' onChange={onChange} onBlur={onBlur} value={value ?? ''}>
                                                <option value='' disabled> -- Select Polyclinic -- </option>
                                                {Polyclinic.map((role) => (
                                                    <option key={role} value={role}>{role}</option>
                                                ))}
                                            </Form.Select>
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

export default AddUser;