import { UserDummy } from "@/data/user/dummy";
import { Gender, User, UserRole } from "@/data/user/types";
import { Breadcrumb, Button, Card, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

type UserFormType = Omit<User, '_id'|'np'|'createdAt'|'updatedAt'>

function UserEdit() {
    const {control, handleSubmit, formState: {errors}} = useForm<UserFormType>()
    const navigate = useNavigate()
    const { id } = useParams()
    const dummy: User[] = UserDummy
    const data = dummy.find(user => user._id === id)

    const formSubmit: SubmitHandler<UserFormType> = (data) => {
        Swal.fire({
            title: "Success",
            icon: "success",
            text: "Edit user success"
        }).then(response => {
            if (response.isConfirmed) {
                navigate(`/administrator/users/detail/${id}`)
            }
        })
    }

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <NavLink to={"/administrator/users"}>User List</NavLink>
                    </li>
                    <Breadcrumb.Item active>Edit User</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>Edit User</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(formSubmit)}>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        defaultValue={data?.firstName}
                                        control={control}
                                        name="firstName"
                                        rules={{
                                            required: "Please input first name",
                                        }}
                                        render={({field}) => (
                                            <FloatingLabel controlId="first-name" label="First Name">
                                                <Form.Control placeholder="Input first name" {...field}/>
                                                {errors.firstName && <span className="text-danger small">{errors.firstName.message}</span>}
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        defaultValue={data?.lastName}
                                        control={control}
                                        name="lastName"
                                        rules={{
                                            required: "Please input last name",
                                        }}
                                        render={({field}) => (
                                            <FloatingLabel controlId="last-name" label="Last Name">
                                                <Form.Control placeholder="Input last name" {...field}/>
                                                {errors.lastName && <span className="text-danger small">{errors.lastName.message}</span>}
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="birthDate"
                                        rules={{
                                            required: "Please input birth date",
                                        }}
                                        defaultValue={data?.birthDate}
                                        render={({field}) => (
                                            <FloatingLabel controlId="birth-date" label="Birth Date">
                                                <Form.Control 
                                                    type="date" 
                                                    placeholder="Input birth date" 
                                                    {...field} 
                                                    value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                                                />
                                                {errors.birthDate && <span className="text-danger small">{errors.birthDate.message}</span>}
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        defaultValue={data?.birthPlace}
                                        control={control}
                                        name="birthPlace"
                                        rules={{
                                            required: "Please input birth place",
                                        }}
                                        render={({field}) => (
                                            <FloatingLabel controlId="birth-place" label="Birth Place">
                                                <Form.Control placeholder="Input birth place" {...field}/>
                                                {errors.birthPlace && <span className="text-danger small">{errors.birthPlace.message}</span>}
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        defaultValue={data?.email}
                                        control={control}
                                        name="email"
                                        rules={{
                                            required: "Please input email",
                                            pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please input a valid email"}
                                        }}
                                        render={({field}) => (
                                            <FloatingLabel controlId="email" label="Email">
                                                <Form.Control placeholder="Input email" {...field}/>
                                                {errors.email && <span className="text-danger small">{errors.email.message}</span>}
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        defaultValue={data?.role}
                                        name="role"
                                        render={({field}) => (
                                            <FloatingLabel controlId="role" label="Role">
                                                <Form.Select aria-label="select role" {...field}>
                                                    {Object.entries(UserRole).map(([key, value]) => (
                                                        <option key={key} value={value}>{value}</option>
                                                    ))}
                                                </Form.Select>
                                            </FloatingLabel>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col sm={6}>
                                    <Controller
                                        control={control}
                                        name="gender"
                                        defaultValue={data?.gender}
                                        render={({field}) => (
                                            <Form.Group as={Row} controlId="gender">
                                                <Form.Label column sm="3">Gender</Form.Label>
                                                <Col sm="9">
                                                    <Form.Check
                                                        type="radio"
                                                        id="user-gender-male"
                                                        label="Male"
                                                        value={Gender.MALE}
                                                        checked={field.value === Gender.MALE}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        id="user-gender-female"
                                                        label="Female"
                                                        value={Gender.FEMALE}
                                                        checked={field.value === Gender.FEMALE}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        )}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default UserEdit;