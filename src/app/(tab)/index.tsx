import SearchInput from "@/components/SearchInput"
import Colors from "@/constants/Colors"
import { View, StyleSheet, FlatList} from "react-native";
import { useState } from "react"
import Layout from "@/components/Layout";
import DropShadow from "react-native-drop-shadow";
import LibraryItem from "@/components/LibraryItem";
import useLocalGames, { LocalGameType } from "@/hooks/useLocalGames";

export default function Library() {
    const textInputState = useState<string>("");
    const games = useLocalGames()

    return (
        <Layout title="Biblioteca">
            <View style={styles.container}>
                <SearchInput />
                <View style={styles.listContainer}>
                    <FlatList data={games} renderItem={({ item }) => <LibraryItem data={{
                        name: item.name,
                        author: item.author,
                        thumbnail: item.image
                    }}/>}/>
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

