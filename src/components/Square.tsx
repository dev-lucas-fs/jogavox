import { StyleSheet, View } from "react-native";

export default function Square(props: React.ComponentProps<typeof View>) {

    return (
        <View style={[styles.square, props.style]}>
            <View style={[styles.squareHorizontal]} />
            <View style={styles.squareMid}>
                <View style={styles.squareVertical} />
                <View style={styles.squareVertical} />
            </View>
            <View style={styles.squareHorizontal} />
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: "transparent",
        width: "20%",
        aspectRatio: 1/1,
        flexDirection: "row",
        opacity: .25,
        transform: "rotate(45deg)",
    },
    squareHorizontal: {
        width: 8,
        height: '100%',
        backgroundColor: "#fff",
    },
    squareVertical: {
        width: '100%',
        height: 8,
        backgroundColor: "#fff"
    },
    squareMid: {
        flex: 1,
        justifyContent: "space-between",
    }
})