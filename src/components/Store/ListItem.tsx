import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Tag from "@/components/Tag";





export default function ListItem() {
    const [isInstall, setInstall] = useState(false);

    function handleOnPress() {
        setInstall(!isInstall);
    }

    return (
        <View style={{ gap: 10, flexDirection: "row", flex: 1 }}>
            <View style={{ width: "25%", aspectRatio: 1, backgroundColor: "#c6c6c6", borderRadius: 5 }} />
            <View style={{ flex: 1, paddingTop: 3, justifyContent: "space-between" }}>
                <View style={{ gap: 5 }}>
                    <Text style={styles.title}>Título do Jogo</Text>
                    <Text style={styles.author}>Autor</Text>
                </View>
                <Text style={styles.size}>[TAMANHO]</Text>
            </View>
            <View style={{ width: "20%", alignItems: "flex-end", justifyContent: "space-between" }}>
                <Pressable onPress={handleOnPress} style={{ padding: 8, backgroundColor: "#E62117", borderRadius: 2, width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "#fff", textAlign: "center" }}>
                        {
                            isInstall ? <ActivityIndicator color={"#FFF"} /> : "Instalar"
                        }
                    </Text>
                </Pressable>
                <Tag size="small" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16, 
        fontWeight: "bold",
        color: "#FFF"
    },
    size: {
        fontSize: 12, 
        color: "#FFF",
        fontWeight: "bold",
    },
    author: {
        fontSize: 12,
        color: "#FFF"
    }
});