import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        aspectRatio: .75,
        borderRadius: 5
    },
    image: {
        flex: 1,
        borderRadius: 5
    },
    mask: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, .25)",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 5,
        zIndex: 10,
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        alignSelf: "center",
        color: "#FFF",
        fontFamily: "Montserrat_Bold",
        fontSize: 14,
        padding: 5
    }
});