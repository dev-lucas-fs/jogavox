import { GestureResponderEvent, TouchableNativeFeedback } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";


interface Props extends React.PropsWithChildren {
    title?: string;
    uri?: string,
    width?: number
    onPress?: (event: GestureResponderEvent) => void
}



const Cover = ({ title, uri, width, onPress} : Props) => (
    <View style={[styles.container, { width }]}>
        <Image style={styles.image} source={{ uri }} />
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.mask}> 
                <Text style={styles.text}>{ title }</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);

export default Cover;

const styles = StyleSheet.create({
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