import { UserDummy } from "@/data/user/dummy";
import { User } from "@/data/user/types";
import { ReactNode, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Container, Form, Row } from "react-bootstrap";
import DataTable, { Alignment, TableColumn } from "react-data-table-component";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

function Users() {
    const [loading, setLoading] = useState<boolean>(true);
    const [filter, setFilter] = useState<string>("")
    const navigate = useNavigate();
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
    ]
    const data: User[] = UserDummy
    const filterUser = data.filter(user => user.np.includes(filter) || 
                                        user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                                        user.lastName.toLowerCase().includes(filter.toLowerCase()))

    function tableSubHeader(): ReactNode {
        return (
            <Row className="w-100 d-flex mb-3">
                <Form.Control className="mr-3" style={{ width: "300px" }} placeholder="Search" onChange={(e) => (setFilter(e.target.value))}/>
                <Button className="btn-success" variant="icon" onClick={() => navigate('/administrator/users/add')}>
                    <FiUserPlus/>
                </Button>
            </Row>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <Breadcrumb.Item active>User List</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Body>
                        <DataTable
                            columns={columns}
                            data={filterUser}
                            className="datatable"
                            pagination
                            highlightOnHover
                            pointerOnHover
                            onRowClicked={(row) => (navigate(`/administrator/users/detail/${row._id}`))}
                            title="User List"
                            progressPending={loading}
                            subHeader
                            subHeaderComponent={tableSubHeader()}
                            subHeaderAlign={Alignment.LEFT}
                            responsive
                        />
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
}

export default Users;