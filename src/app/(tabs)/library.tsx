import { router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useContext, useEffect } from 'react'


import Amount from "@/components/Amount";
import Edit from "@/components/Edit";
import GameImage from "@/components/GameImage";
import TabLayout from "@/layouts/TabLayout";
import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { download } from "@/core/GameDownloader";



export default function Library() {
    const context = useContext(CurrentGameContext);

    function GoToPresentation() {
        context.changeId(1);
        router.push("/Game/Presentation");
    }

    useEffect(() => {
        download()
    }, [])

    return (
        <TabLayout title="Biblioteca">
            <View style={styles.containerEdit}>
                <Edit 
                    icon='search' 
                    placeholder='Procure pelo nome' />
            </View>
            
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={[styles.sectionContainer, { flex: 1 }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={styles.sectionText}>Jogos Instalados</Text>
                            <Amount n={2} />
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <FlatList 
                            nestedScrollEnabled
                            data={[1, 2]} 
                            renderItem={({ item }) => <GameImage onPress={GoToPresentation} /> } 
                            contentContainerStyle={{ gap: 15, paddingBottom: 20, paddingTop: 10 }}
                            numColumns={2}
                            horizontal={false}
                            columnWrapperStyle={{ gap: 10 }}
                            scrollEnabled={false}/>
                    </View>
                </View>

                
            </SafeAreaView>
        </TabLayout>
    );
}

const styles = StyleSheet.create({
    containerEdit: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    sectionText: {
        color: "#FFF",
        fontFamily: "Barlow",
        fontSize: 20,
        fontWeight: "700",
    },
    sectionContainer: {
        gap: 15,
        marginTop: 20,
    }
});