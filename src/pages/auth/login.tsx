import AuthLayout from "@/layouts/auth";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type LoginForm = {
    np : string;
    password: string;
}

function LoginPage() {
    const { control, handleSubmit, formState: {errors} } = useForm<LoginForm>()

    const formSubmit: SubmitHandler<LoginForm> = (data) => {
        console.log(data);
    }

    return (
        <AuthLayout>
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5}>
                            <Card className="shadow-lg border-0 rounded-lg mt-5">
                                <Card.Header className="justify-content-center">
                                    <h3 className="font-weight-light my-4">Login</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit(formSubmit)}>
                                        <Controller
                                            control={control}
                                            name="np"
                                            defaultValue=""
                                            rules={{
                                                required: "Please input NP",
                                                pattern: {value: /^\d+$/, message: "Please input a valid NP"}
                                            }}
                                            render={({field}) => (
                                                <Form.Group className="form-group" controlId="np">
                                                    <Form.Label>NP</Form.Label>
                                                    <Form.Control placeholder="Input NP" {...field}/>
                                                    {errors.np && <span className="text-danger small">{errors.np.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name="password"
                                            defaultValue=""
                                            rules={{
                                                required: "Please input password",
                                            }}
                                            render={({field}) => (
                                                <Form.Group className="form-group" controlId="password">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Input password" {...field}/>
                                                    {errors.password && <span className="text-danger small">{errors.password.message}</span>}
                                                </Form.Group>
                                            )}
                                        />
                                        <Form.Group controlId="button-group" className="form-group d-flex align-items-center justify-content-end mt-4 mb-0">
                                            <Button type="submit">Login</Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </AuthLayout>
    );
}

export default LoginPage;