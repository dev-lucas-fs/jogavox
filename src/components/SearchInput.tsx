import { StyleSheet, TextInput, Pressable, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useRef } from "react";

interface props extends React.ComponentProps<typeof View> {
    state?: any
}

export default function SearchInput(props: props) {
    const ref = useRef<TextInput | null>(null);
    let state = props.state;
    if(!props.state) 
        state = ["", () => {}]

    function handleOnPress() {
        if(ref.current === null) return;
        ref.current.focus();
    }

    return (
        <Pressable onPress={handleOnPress} style={styles.container}>
            <Feather name="search" size={24} color="#888888" />
            {
                props.state 
                ? <TextInput onChangeText={(e) => state[1](e)} value={state[0]}  ref={ref} placeholderTextColor="#A6A6A6"  placeholder="Procure pelo nome" style={styles.input}/>
                : <TextInput ref={ref} placeholderTextColor="#A6A6A6"  placeholder="Procure pelo nome" style={styles.input}/>

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
})