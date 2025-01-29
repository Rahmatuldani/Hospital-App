import PatientApi from "@/api/patient";
import PDFHeader from "@/components/pdf/header";
import { Patient } from "@/data/patient/types";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PatientPrint() {
    const { id } = useParams()
    const [patient, setPatient] = useState<Patient | undefined>(undefined)

    useEffect(() => {
        async function initiate() {
            const response = await PatientApi.getPatient(id ?? "")
            await setPatient(response)
        }
        initiate()
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document>
                    <Page size={"A4"} style={{ padding: 35, paddingTop: 10 }}>
                        <PDFHeader />
                        <View style={{
                            textAlign: 'center',
                            marginBottom: 20
                        }}>
                            <Text>Patient Detail</Text>
                        </View>
                        <View>
                            <Text>Medical Record: {patient?.medicalRecord}</Text>
                        </View>
                        <View>
                            <Text>Name: {patient?.name}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default PatientPrint;