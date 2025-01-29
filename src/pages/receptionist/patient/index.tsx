import PatientApi from "@/api/patient";
import { Patient } from "@/data/patient/types";
import { readableDate, truncateString } from "@/lib/convert";
import { ReactNode, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Container, Form, Row } from "react-bootstrap";
import DataTable, { Alignment, TableColumn } from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router";

function PatientPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [filter, setFilter] = useState<string>("")
    const [patients, setPatients] = useState<Patient[]>([]) 
    const navigate = useNavigate()
    const { t } = useTranslation();

    const columns: TableColumn<Patient>[] = [
        {
            name: `${t('medical_record')}`,
            selector: row => row.medicalRecord,
            grow: 1,
            sortable: true
        },
        {
            name: "BPJS",
            selector: row => row.bpjs || "-",
            grow: 1,
            sortable: true
        },
        {
            name: `${t('name')}`,
            selector: row => truncateString(row.name, 20),
            grow: 2,
            sortable: true
        },
        {
            name: `${t('birth_place_date')}`,
            selector: row => `${truncateString(row.birthPlace, 20)} / ${readableDate(new Date(row.birthDate))}`,
            grow: 2,
            sortable: true
        }
    ]
    const filterPatient = patients.filter(patient => patient.name.toLowerCase().includes(filter.toLowerCase()) ||
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
        async function initiate() {
            setPatients(await PatientApi.getAllPatients())
            setLoading(false)
        }

        initiate()
    }, [])
    return (
        <main>
            <Container className="mt-5">
                <Breadcrumb>
                    <Breadcrumb.Item active>{t("patient_list")}</Breadcrumb.Item>
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
                            title={t("patient_list")}
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