import Colors from "@/constants/Colors";
import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import collection, { CollectionType } from "@/core/JOGCollection";
import { download } from "@/core/JOGDownload";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";


export default function StoreList() {
    const context = useContext(CurrentGameContext);
    console.log(context.installedGames);
    const [data] = useState<CollectionType[]>(
        collection.sort((a, b) => (
            !context.installedGames
            ? -1 
            : context.installedGames.find((k) => a.id === k.id) ? 1 : -1
        ))
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                scrollEnabled={false}
                nestedScrollEnabled
                contentContainerStyle={{ gap: 25, paddingHorizontal: 20 }} 
                data={data} 
                renderItem={ ({ item }) => <Item data={item}/> } />     
        </View>
        
    );
}


const Item = ({ data } : { data : CollectionType }) => {
    const context = useContext(CurrentGameContext);
    const [installState, setInstallState] = useState<"installing" | "Instalar" | "Instalado">(
        context.installedGames.find(({ id }) => id === data.id) ? "Instalado" : "Instalar"
    );

    function handleOnPress() {
        if(installState === "Instalar")
            setInstallState("installing");
    }

    async function downloadGame() {
        try {
            await download(data.id);
            await context.loadInstalledGames();
            setInstallState("Instalado");
        } catch (error) {
            console.log(error);
            setInstallState("Instalar");
        }
    }

    useEffect(() => {
        if(installState !== "installing") return;

        downloadGame();
    }, [installState]);

    return (
        <View style={{ gap: 10, flexDirection: "row", flex: 1 }}>
            <Image source={{ uri: data.image  }} style={{ width: "25%", aspectRatio: 1, backgroundColor: "#c6c6c6", borderRadius: 5 }} />
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ gap: 5 }}>
                    <Text style={styles.title}>{ data.name }</Text>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.author}>Autor: { data.author }</Text>
                </View>
                <Text style={styles.size}>{ data.size }MB</Text>
            </View>
            <View style={{ width: "20%", alignItems: "flex-end", justifyContent: "space-between" }}>
                <Pressable onPress={handleOnPress} style={styles.installBtn}>
                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
                        {
                            installState === "installing" ? <ActivityIndicator color={"#FFF"} /> : installState
                        }
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16, 
        fontFamily: "Montserrat_Bold",
        color: Colors.text
    },
    size: {
        fontSize: 12, 
        color: Colors.text,
        fontFamily: "Montserrat_Bold",
    },
    author: {
        fontSize: 12,
        color: Colors.text,
        fontFamily: "Montserrat_Medium",
    },
    installBtn: { 
        padding: 8, 
        backgroundColor: Colors.primary, 
        borderRadius: 2, 
        width: "100%", 
        alignItems: "center" 
    }
});