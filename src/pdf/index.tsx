import { Document, Image, Link, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import Brand from "@/assets/icon_rsagung.jpeg";
import React from "react";
import { config } from "@/config/config";

function PDFDocument({children}: {children: React.ReactNode}) {
    const Header = () => (
        <View style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "2px solid #000",
            marginBottom: 15
        }}>
            <View style={{
                width: "30%",
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image src={Brand} style={{
                    width: 80
                }}/>
            </View>
            <View style={{
                width: "100%",
                display: 'flex',
                alignItems: 'center',
                padding: 20,
            }}>
                <Text style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: 3
                }}>{config.hospitalSlug.toUpperCase()}</Text>
                <Text style={{
                    fontSize: '8px',
                    textAlign: 'center',
                    marginBottom: 2
                }}>{config.hospitalAddress}</Text>
                <Text style={{
                    fontSize: '11px'
                }}>Telp. {config.hospitalPhone.toUpperCase()} | Website 
                    <Link src="http://localhost:5173"> {config.hospitalUrl}</Link>
                </Text>
            </View>
        </View>
    );

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document>
                    <Page size={"A4"} style={{padding: 35, paddingTop: 10}}>
                        <Header/>
                        {children}
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    );
}

export default PDFDocument;