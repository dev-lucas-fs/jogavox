import { Pressable, TouchableNativeFeedback, StyleSheet, Text, View, Image } from "react-native";


export default function GameImage({ onPress }: React.ComponentProps<typeof Pressable>) {

    return (
        <Pressable style={styles.container} onPress={onPress}>
                {
                    // <Image style={styles.image} source={{ uri: "https://drive.google.com/uc?export=download&id=1MvBSkGzKpE9P0nMrlaaIe2dtA9kSZ_t9" }} />
                    <TouchableNativeFeedback onPress={onPress}>
                        <View style={styles.image}/>
                    </TouchableNativeFeedback>
                    
                }
                <Text style={styles.title}>Titulo Jogo</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        width: "100%",
        height: "40%",
        backgroundColor: "rgba(0, 0, 0, .45)",
        bottom: 0,
        position: "absolute",
        fontSize: 16,
        fontWeight: "900",
        color: "#fff",
        textAlign: "center",
        flexWrap: "wrap",
        paddingTop: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: "#d6d6d6"
    },
    play: {

    }
});