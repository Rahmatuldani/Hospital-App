import LoadingComponent from "@/components/loading";
import { UserDummy } from "@/data/user/dummy";
import { User } from "@/data/user/types";
import { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router";
import Profile from "@/assets/assets/img/illustrations/profiles/profile-1.png";
import { readableDate } from "@/lib/convert";

function UserDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const dummy: User[] = UserDummy;
    const [data, setData] = useState<User | undefined>(undefined)

    useEffect(() => {
        setTimeout(() => {
            const select = dummy.find(user => user._id === id)
            setData(select)
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <Container className="mt-5">
            <Breadcrumb>
                <li className="breadcrumb-item">
                    <NavLink to={"/administrator/users"}>User List</NavLink>
                </li>
                <Breadcrumb.Item active>User Detail</Breadcrumb.Item>
            </Breadcrumb>
            <Card>
                <Card.Header>User Detail</Card.Header>
                <Card.Body>
                    {loading ? 
                        <LoadingComponent/>
                    :
                        <Row>
                            <Col xs={4} className="d-flex justify-content-center align-items-center">
                                <img src={Profile} alt={data?.firstName+"-img"} width={"60%"}/>
                            </Col>
                            <Col xs={8}>
                                <Form>
                                    <Form.Group as={Row} controlId="np">
                                        <Form.Label column sm={2}>NP</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.np}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label column sm={2}>Name</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.firstName+" "+data?.lastName}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="email">
                                        <Form.Label column sm={2}>Email</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.email}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="birthDate">
                                        <Form.Label column sm={2}>Birth Date</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={readableDate(data?.birthDate)}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="birthPlace">
                                        <Form.Label column sm={2}>Birth Place</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.email}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="gender">
                                        <Form.Label column sm={2}>Gender</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.gender}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="role">
                                        <Form.Label column sm={2}>Role</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={data?.role}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="join-date">
                                        <Form.Label column sm={2}>Join Date</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control plaintext readOnly defaultValue={readableDate(data?.createdAt)}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
}

export default UserDetail;