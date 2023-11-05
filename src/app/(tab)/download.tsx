import GameList from "@/components/GameList"
import Colors from "@/constants/Colors"
import { View, Text, StyleSheet } from "react-native"

export default function Library() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acervo Online</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 15
    },
    title: {
        fontSize: 36,
        color: Colors.textPrimary,
        fontFamily: "Nunito",
        fontWeight: "900",
        textAlign: "center"
    }
})