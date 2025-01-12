import PDFHeader from "@/components/pdf/header";
import { PatientDummy } from "@/data/patient/dummy";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useParams } from "react-router";

function PatientPrint() {
    const { id } = useParams()
    const dummy = PatientDummy
    const data = dummy.find(patient => patient._id === id)

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
                            <Text>Medical Record: {data?.medicalRecord}</Text>
                        </View>
                        <View>
                            <Text>Name: {data?.name}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default PatientPrint;