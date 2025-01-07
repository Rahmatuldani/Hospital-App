import LoadingComponent from "@/components/loading";
import { UserDummy } from "@/data/user/dummy";
import { User } from "@/data/user/types";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import { FiUsers } from "react-icons/fi";
import UserDetail from "./detail";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router";

function Users() {
    const [loading, setLoading] = useState<boolean>(true);
    const columns: TableColumn<User>[] = [
        {
            name: "NP",
            selector: row => row.np,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.firstName+" "+row.lastName,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <OverlayTrigger placement="top" overlay={
                        <Tooltip id="user-detail">
                            Detail
                        </Tooltip>
                    }>
                        <Link to={`/administrator/users/detail/${row._id}`}>
                            <Button variant="icon" className="btn-datatable btn-transparent-dark"><FaClipboardList/></Button>                        
                        </Link>
                    </OverlayTrigger>
                </>
            )
        }
    ]
    const data: User[] = UserDummy

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <main>
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                <Container>
                    <div className="page-header-content pt-4">
                        <Row className="align-items-center justify-content-between">
                            <Col xs={"auto"} className="mt-4">
                                <h1 className="page-header-title">
                                    <div className="page-header-icon"><FiUsers/></div>
                                    Users
                                </h1>
                                <div className="page-header-subtitle">Example dashboard overview and content summary</div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Container className="mt-n10">
                <Card>
                    <Card.Body className="d-flex justify-content-center">
                        {loading ? 
                            <LoadingComponent/>
                        :
                            <DataTable
                                columns={columns}
                                data={data}
                                className="datatable"
                            />
                        }
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;