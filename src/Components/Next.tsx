import { StyleSheet } from "react-native";
import { Dimensions, TouchableNativeFeedback, View } from "react-native";
import Icon from '@expo/vector-icons/Feather';
import { CurrentGameContext } from "@/Contexts/CurrentGameContext";
import { useContext } from "react";
import { router } from "expo-router";




export default function Next({ showNext, onPress = null }) {
    const context = useContext(CurrentGameContext);

    function goNextSlide() {
        if(onPress) {
            onPress();
            return;
        }

        context.nextGameState();
        router.replace("/Game/Slide");
    }


    if(!showNext) return null;

    return (
        <View style={[styles.next, { height: !showNext ? Dimensions.get('screen').height : "100%"}]}>
            <TouchableNativeFeedback onPress={goNextSlide}>
                <View
                    style={styles.containerIcon}>
                    <Icon style={{ alignSelf: "center" }} name="arrow-right-circle" color={"#fff"} size={46} />
                </View>
            </TouchableNativeFeedback>
        </View> 
    )
}

const styles = StyleSheet.create({
    next: { 
        position: "absolute", 
        right: 0, 
        width: "20%", 
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerIcon: { 
        backgroundColor: "rgba(255, 255, 255, .05)", 
        width: "100%", 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"  
    }
});