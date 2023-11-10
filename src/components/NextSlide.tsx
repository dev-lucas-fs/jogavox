import { View, StyleSheet, TouchableNativeFeedback } from "react-native"
import { Feather } from '@expo/vector-icons';


export default function NextSlide({ ...rest }: React.ComponentProps<typeof TouchableNativeFeedback>) {

    return (
        <TouchableNativeFeedback style={styles.container} {...rest}>
            <View style={styles.container}>
                <Feather name="arrow-right-circle" size={45} color={"#fff"}/>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "20%",
        height: "100%",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center"
    }
});