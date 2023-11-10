import Layout from "@/components/Layout"
import Colors from "@/constants/Colors"
import useGameDownload from "@/hooks/useGameDownload"
import { StyleSheet, Button } from "react-native"

export default function Download() {
    useGameDownload()
    

    return (
        <Layout title="Acervo Online" >
            <Button  title="Download" />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 15
    },
})