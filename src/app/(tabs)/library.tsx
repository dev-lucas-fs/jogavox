import { router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useContext, useEffect } from 'react'


import TabLayout from "@/layouts/TabLayout";
import { CurrentGameContext } from "@/Contexts/CurrentGameContext";
import Colors from "@/constants/Colors";
import InstalledList from "@/Components/Lists/InstalledList";



export default function Library() {
    

    return (
        <TabLayout>        
            <View style={[styles.sectionContainer, { flex: 1 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Text style={styles.sectionText}>Jogos Instalados</Text>
                    </View>
                </View>
                <InstalledList />
            </View>
        </TabLayout>
    );
}

const styles = StyleSheet.create({
    containerEdit: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    sectionText: {
        color: Colors.text,
        fontFamily: "Montserrat_Medium",
        fontSize: 20,
    },
    sectionContainer: {
        gap: 15,
        marginTop: 25,
        paddingHorizontal: 20
    }
});