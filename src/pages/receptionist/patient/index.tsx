import { PatientDummy } from "@/data/patient/dummy";
import { Patient } from "@/data/patient/types";
import { readableDate } from "@/lib/convert";
import { ReactNode, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Container, Form, Row } from "react-bootstrap";
import DataTable, { Alignment, TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

function PatientPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [filter, setFilter] = useState<string>("")
    const navigate = useNavigate()
    const data: Patient[] = PatientDummy
    const { t } = useTranslation();

    const columns: TableColumn<Patient>[] = [
        {
            name: "Rekam Medis",
            selector: row => row.medicalRecord,
            sortable: true
        },
        {
            name: "BPJS",
            selector: row => row.bpjs || "-",
            sortable: true
        },
        {
            name: "Nama",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Tempat / Tanggal Lahir",
            selector: row => `${row.birthPlace} / ${readableDate(row.birthDate)}`,
            sortable: true
        }
    ]
    const filterPatient = data.filter(patient => patient.name.toLowerCase().includes(filter.toLowerCase()) ||
                                                patient.medicalRecord.includes(filter))
    
    function tableSubHeader(): ReactNode {
        return (
            <Row className="w-100 d-flex mb-3">
                <Form.Control className="mr-3" style={{ width: "300px" }} placeholder="Search" onChange={(e) => (setFilter(e.target.value))}/>
                <Button className="btn-success" variant="icon" onClick={() => navigate('/receptionist/patients/add')}>
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
                    <Breadcrumb.Item active>{t("patient_list_card_title")}</Breadcrumb.Item>
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
                            onRowClicked={(row) => (navigate(`/receptionist/patients/detail/${row._id}`))}
                            title={t("patient_list_card_title")}
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

export default PatientPage;