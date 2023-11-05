import GameList from "@/components/GameList"
import SearchInput from "@/components/SearchInput"
import Colors from "@/constants/Colors"
import Global from "@/constants/Global"
import { View, Text, StyleSheet } from "react-native"

export default function Library() {

    return (
        <View style={[Global.heightWithTabs, styles.container]}>     
            <View style={styles.subContainer}>
                <Text style={styles.title}>Biblioteca</Text>
                <SearchInput />
            </View>
            <GameList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 15,
        gap: 45
    },
    subContainer: {
        paddingHorizontal: 20,
        gap: 20
    },
    title: {
        fontSize: 36,
        color: Colors.textPrimary,
        fontFamily: "Nunito",
        fontWeight: "900",
        textAlign: "center"
    }
})