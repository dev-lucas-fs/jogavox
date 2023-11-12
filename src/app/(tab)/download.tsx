import Layout from "@/components/Layout"
import Colors from "@/constants/Colors"
import useGameDownload from "@/hooks/useGameDownload"
import { StyleSheet, Button, Image } from "react-native"
import * as FileSystem from "expo-file-system"
import { useState } from "react"

export default function Download() {
    useGameDownload()
    const [uri, setUri] = useState<any>()

  
    const path = FileSystem.cacheDirectory + "unzipped/2015_3_meio_ambiente/1.jpg"

    async function handleImage() {
        const info = await FileSystem.getInfoAsync(path);
        console.log(info)
        if(info.exists) {
            console.log("ss")
            setUri(() => info.uri)
        }
    }
    handleImage()
    return (
        <Layout title="Acervo Online" >
            <Image style={{ width: 100, height: 100 }} source={{ uri }} />
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