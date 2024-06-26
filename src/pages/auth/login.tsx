import React from 'react';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { UserType } from '../../store/user/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsLoading, selectCurrentUser } from '../../store/auth/selector';
import { Navigate } from 'react-router-dom';
import { LoginFunction } from '../../store/auth/action';
import { LoginData } from '../../store/auth/types';
import { Dispatch } from 'redux';

function Login(): React.ReactNode {
    document.body.className = 'bg-primary';
    const currentUser: UserType | null = useSelector(selectCurrentUser);
    const dispatch: Dispatch = useDispatch();
    const loading: boolean = useSelector(selectAuthIsLoading);
    const { handleSubmit, control, formState: { errors } } = useForm<LoginData>();
    
    const FormSubmit: SubmitHandler<LoginData> = function(data) {
        console.log(data);
        LoginFunction(dispatch, data);
    };
    
    if (currentUser) {
        return <Navigate to={`/${String((currentUser.role).toLowerCase())}`} replace/>;
    }
    return (
        <div id='layoutAuthentication'>
            <div id='layoutAuthentication_content'>
                <main>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={5}>
                                {/* <!-- Basic login form--> */}
                                <Card border='0' className='shadow-lg rounded-lg mt-5'>
                                    <Card.Header className='justify-content-center'>
                                        <h3 className='font-weight-light my-4'>Login</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        {/* <!-- Login form--> */}
                                        <Form onSubmit={handleSubmit(FormSubmit)}>
                                            {/* <!-- Form Group (email address)--> */}
                                            <Controller
                                                control={control}
                                                name='email'
                                                rules={{
                                                    required: 'Email is required',
                                                }}
                                                defaultValue=''
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <Form.Group className='mb-2'>
                                                        <Form.Label className='small mb-1'>Email</Form.Label>
                                                        <Form.Control type='email' placeholder='Enter email address' onChange={onChange} onBlur={onBlur} value={value}/>
                                                        {errors.email && <span className='small text-danger'>{errors.email.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            {/* <!-- Form Group (password)--> */}
                                            <Controller
                                                control={control}
                                                name='password'
                                                rules={{
                                                    required: 'Password is required',
                                                    minLength: {value: 6, message: 'Password length min 6 character'}
                                                }}
                                                defaultValue=''
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <Form.Group className='mb-2'>
                                                        <Form.Label className='small mb-1'>Password</Form.Label>
                                                        <Form.Control type='password' placeholder='Enter password' onChange={onChange} onBlur={onBlur} value={value}/>
                                                        {errors.password && <span className='small text-danger'>{errors.password.message}</span>}
                                                    </Form.Group>
                                                )}
                                            />
                                            {/* <!-- Form Group (remember password checkbox)--> */}
                                            <Controller
                                                control={control}
                                                name='remember'
                                                defaultValue={false}
                                                render={({ field: { onChange, value } }) => (
                                                    <Form.Group className='mb-2'>
                                                        <div className='custom-control custom-checkbox'>
                                                            <input className='custom-control-input' id='rememberPasswordCheck' type='checkbox' onChange={onChange} checked={value}/>
                                                            <label className='custom-control-label' htmlFor='rememberPasswordCheck'>Remember password</label>
                                                        </div>
                                                    </Form.Group>
                                                )}
                                            />
                                            {/* <!-- Form Group (login box)--> */}
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
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
            <div id='layoutAuthentication_footer'>
                <footer className='footer mt-auto footer-dark'>
                    <Container fluid>
                        <Row>
                            <Col md={6} className='small'>
                                    Copyright &#xA9; Hospital App 2024
                            </Col>
                            <Col md={6} className='text-md-right small'>
                                <a href='#!'>Privacy Policy</a>
                                    &#xB7;
                                <a href='#!'>Terms &amp; Conditions</a>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </div>
    );
}

export default Login;
