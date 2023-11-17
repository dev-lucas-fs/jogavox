import { StyleSheet, Text, View } from "react-native";

interface Props extends React.PropsWithChildren {
    size?: "small" | "large",
    isModern?: boolean
}

export default function Tag({ size = "small", isModern = true } : Props) {
    const style = size === "small" ? styles.small : styles.large;

    return (
        <View style={styles.tagContainer}>
            <Text style={[styles.container, style, { backgroundColor: isModern ? "#B62100" : "#FF7037" }]}>
                {
                    isModern ? "Moderno" : "Legado"
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tagContainer: {
        alignSelf: 'auto',
    },
    container: {
        width: "100%",
        fontFamily: "Barlow-Regular",
        fontWeight: "900",
        color: "#fff",
    },
    small: {
        fontSize: 10,
        padding: 6
    },
    large: {
        fontSize: 14,
        padding: 10
    }
});