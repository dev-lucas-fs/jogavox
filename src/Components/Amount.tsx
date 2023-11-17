import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";


interface Props extends React.PropsWithChildren {
    n: number
}

export default function Amount({ n }: Props) {

    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{n}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "#E62117",
        borderRadius: 50,
    },
    text: {
        fontFamily: "Barlow-Regular",
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "center",
        verticalAlign: "middle",
        aspectRatio: 1,
        paddingLeft: 1.5,
        fontSize: 12
    }
});