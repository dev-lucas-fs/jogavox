import Colors from "@/constants/Colors"
import { View, Text, StyleSheet } from "react-native"

export default function Library() {

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    }
})