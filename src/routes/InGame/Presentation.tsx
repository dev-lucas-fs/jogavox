import { Dimensions, Image, StyleSheet, View, Text, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ScreenOrientation from "expo-screen-orientation"
import Square from "./components/Square";

export default function Presentation() {

    async function handleOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
    }


    return (
        <LinearGradient 
            colors={['#FF7037', '#B63400']}
            end={{ x: 0.49, y: 0.02 }}
            start={{ x: 0.96, y: 0.87 }}
            style={styles.container} 
        >
            { /* SOMENTE VISUAL */ }
            <View style={styles.squares}>
                <View style={styles.squareHorizontal}>
                    <Square style={{ marginLeft: "-8%" }} />
                    <Square style={{ marginRight: "-8%" }} />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={[{ paddingLeft: 20 },styles.authorVersion]}>{ "" }</Text>
                <View style={styles.mid}>
                    <Image style={styles.image} source={{ uri: "gameInfo?.image" }} />
                    <Text style={styles.title}>{ "gameInfo?.name" }</Text>
                    <Text style={styles.comments}> { "gameInfo?.comments" } </Text>
                    <Square style={{ 
                        position: "absolute", 
                        alignSelf: "flex-end", 
                        right: "50%",
                        bottom: -60,
                    }} />
                </View>
                <Text style={[{ paddingRight: 20 },styles.authorVersion]}>Versão: 1.0</Text>
            </View>
            <StatusBar hidden={true} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    squares: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        zIndex: 0
    },
    squareHorizontal: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",

    },
    squareVertical: {
        width: "100%",
        flex: 1,
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "row"
    },
    mid: {
        paddingTop: 20,
        flex: 1,
        gap: 10
    },
    title: {
        color: "#FFF",
        fontFamily: "SpicyRice",
        fontSize: 28,
        textAlign: "center"
    },
    comments: {
        color: "#fff",
        fontFamily: "Nunito",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "100"
    },
    image: {
        borderWidth: 5,
        borderColor: "#fff",
        width: Dimensions.get("screen").width < 140 ? "20%" : 140,
        borderRadius: 500,
        aspectRatio: 1/1,
        objectFit: "cover",
        alignSelf: "center"
    },
    authorVersion: {
        color: "#FFF",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "700",
        alignSelf: "flex-end",
        paddingBottom: 20,
    }
})