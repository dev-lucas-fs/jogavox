import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

interface props extends React.ComponentProps<typeof View> {
   data: {
        name: string,
        thumbnail: any,
        author: string
   }
}

export default function LibraryItem(props: props) {
    console.log(props.data.thumbnail)
    return (
       <TouchableNativeFeedback>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.imageInfoContainer}>
                        <Image style={styles.image} source={{ uri: props.data.thumbnail }} />
                        <View>
                            <Text style={styles.title}>{ props.data.name  }</Text>
                            <Text style={styles.author}>{ props.data.author }</Text>
                        </View>
                    </View>
                </View>
            </View>
       </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

        borderRadius: 10,
        paddingHorizontal: 20
    },
    subContainer: {
        width: '100%',
        flexDirection: "row",
        gap: 20,
        paddingVertical: 25,
        borderBottomWidth: .4,
        borderBottomColor: "#8F8F8F",
        borderRadius: 10
    },

    imageInfoContainer: {
        width: '100%',
        flexDirection: "row",
        gap: 10,
        alignItems: 'center',
    },
    image: {
        width: '25%',
        aspectRatio: 1,
        borderRadius: 10
    },
    title: {
        color: "#0B081D",
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: "700",
    },
    author: {
        color: "#8F8F8F",
        fontFamily: 'Nunito',
        fontSize: 12,
        fontWeight: "300",
    }
})