import { PatientsDummy } from "@/data/patient/dummy";
import { Patient } from "@/data/patient/types";
import { ReactNode, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Container, Form, Row } from "react-bootstrap";
import DataTable, { Alignment, TableColumn } from "react-data-table-component";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

function Patients() {
    const [loading, setLoading] = useState<boolean>(true)
    const [filter, setFilter] = useState<string>("")
    const navigate = useNavigate()
    const data: Patient[] = PatientsDummy

    const columns: TableColumn<Patient>[] = [
        {
            name: "Medical Record",
            selector: row => row.medicalRecord,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        }
    ]
    const filterPatient = data.filter(patient => patient.name.toLowerCase().includes(filter.toLowerCase()) ||
                                                patient.medicalRecord.includes(filter))
    
    function tableSubHeader(): ReactNode {
        return (
            <Row className="w-100 d-flex mb-3">
                <Form.Control className="mr-3" style={{ width: "300px" }} placeholder="Search" onChange={(e) => (setFilter(e.target.value))}/>
                <Button className="btn-success" variant="icon" onClick={() => navigate('/administrator/patients/add')}>
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
                    <Breadcrumb.Item active>Patient List</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Body>
                        <DataTable
                            columns={columns}
                            data={filterPatient}
                            className="datatable"
                            pagination
                            highlightOnHover
                            pointerOnHover
                            onRowClicked={(row) => (navigate(`/administrator/patients/detail/${row._id}`))}
                            title="Patient List"
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

export default Patients;