import { Dimensions, StyleSheet, View } from "react-native";
import Icon from '@expo/vector-icons/Feather';
import { useState } from "react";



export default function Answer() {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState("");

    return {
        toggleModal: () => setShow(!show),
        Button: <Button />,
        Modal: <Modal />
    }
}

function Modal() {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.modal}>

            </View>
        </View>
    );
}

function Button() {

    return (
        <View 
            style={styles.button}    
        >
            <Icon name="book-open" />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "rgba(255. 255, 255, .3)"
    },
    modalContainer: {
        position: "absolute",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        zIndex: 99999,
        backgroundColor: "rgba(0, 0, 0, .25)",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: Dimensions.get("screen").width * .8,
        height: Dimensions.get("screen").height * .8,
        backgroundColor: "#fff",
        borderRadius: 5
    },
});

