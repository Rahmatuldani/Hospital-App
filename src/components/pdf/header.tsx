import { config } from "@/config/config";
import { Image, Link, Text, View } from "@react-pdf/renderer";
import Brand from "@/assets/icon_rsagung.jpeg";

function PDFHeader() {
    return (
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
}

export default PDFHeader;