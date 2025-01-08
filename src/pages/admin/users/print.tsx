import { UserDummy } from "@/data/user/dummy";
import { Document, Image, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useParams } from "react-router";
import Picture from "@/assets/assets/img/illustrations/profiles/profile-1.png";
import { readableDate } from "@/lib/convert";
import PDFHeader from "@/components/pdf/header";

function UserPrint() {
    const { id } = useParams()
    const dummy = UserDummy
    const data = dummy.find(user => user._id === id)

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document>
                    <Page size={"A4"} style={{padding: 35, paddingTop: 10}}>
                        <PDFHeader/>
                        <View style={{
                            textAlign: 'center',
                            marginBottom: 20
                        }}>
                            <Text>Users Detail</Text>
                        </View>
                        <View style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                            <Image src={Picture} style={{ width: 150 }}/>
                        </View>
                        <View>
                            <Text>NP: {data?.np}</Text>
                        </View>
                        <View>
                            <Text>Name: {data?.firstName + " " + data?.lastName}</Text>
                        </View>
                        <View>
                            <Text>Email: {data?.email}</Text>
                        </View>
                        <View>
                            <Text>Birth Date: {readableDate(data?.birthDate)}</Text>
                        </View>
                        <View>
                            <Text>Birth Place: {data?.birthPlace}</Text>
                        </View>
                        <View>
                            <Text>Gender: {data?.gender}</Text>
                        </View>
                        <View>
                            <Text>Role: {data?.role}</Text>
                        </View>
                        <View>
                            <Text>Join Date: {readableDate(data?.createdAt)}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default UserPrint;