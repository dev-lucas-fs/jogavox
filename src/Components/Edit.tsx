import { useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

interface Props extends React.ComponentProps<typeof View> {
    state?: any,
    placeholder?: string;
    icon?: string;
}

export default function Edit({ placeholder, icon, state } : Props) {
    const ref = useRef<TextInput | null>(null);

    function handleOnPress() {
        if(ref.current === null) return;
        ref.current.focus();
    }

    return (
        <Pressable onPress={handleOnPress} style={styles.container}>
            {
                icon ? <Icon name="search" size={24} color="#888888" /> : null
            }
            {
                state 
                ? <TextInput onChangeText={(e) => state[1](e)} value={state[0]}  ref={ref} placeholderTextColor="#A6A6A6"  placeholder={placeholder} style={styles.input}/>
                : <TextInput ref={ref} placeholderTextColor="#A6A6A6"  placeholder={placeholder} style={styles.input}/>
            }
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: 60,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        fontSize: 18,
        fontFamily: "Nunito",
        paddingHorizontal: 15,
        paddingRight: 25,
        color: "#888888"
    }
});