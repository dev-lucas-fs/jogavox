import SearchInput from "@/components/SearchInput"
import { View, StyleSheet, FlatList} from "react-native";
import { useEffect, useState } from "react"
import Layout from "@/components/Layout";
import LibraryItem from "@/components/LibraryItem";
import useLocalGames from "@/hooks/useLocalGames";
import * as ScreenOrientation from "expo-screen-orientation"

export default function Library() {
    const textInputState = useState<string>("");
    const games = useLocalGames()

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }, [])

    return (
        <Layout title="Biblioteca">
            <View style={styles.container}>
                <SearchInput />
                <View style={styles.listContainer}>
                    <FlatList data={games} renderItem={({ item }) => <LibraryItem data={item}/>}/>
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 25,
        flex: 1
    },
    listContainer: {
        flex: 1,
        shadowColor: '#171717',  
        shadowRadius: 10,  
        shadowOpacity: 0.2,  
        elevation: 5,
        borderStartColor: "transparent",
        borderRadius: 10,
        backgroundColor: "#FCFCFC",
    }
})

