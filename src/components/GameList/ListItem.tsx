import Colors from "@/constants/Colors"
import { View, StyleSheet, ScrollView, Image, Text, TouchableNativeFeedback } from "react-native"
import { Feather } from '@expo/vector-icons';

interface IProps extends React.ComponentPropsWithoutRef<typeof ScrollView> {
    title: string;
    author: string;
    image: any;
}

export default function ListItem(props: IProps) {

    return (
        <TouchableNativeFeedback >
            <View style={[props.style, styles.container]}>
                <Image style={styles.image} source={props.image} />
                <View style={styles.nameAuthorContainer}>
                    <Text style={styles.title}>{ props.title }</Text>
                    <Text style={styles.author}>{ props.author }</Text>
                </View>
                <Feather name="chevron-right" size={30} color={Colors.primary}/>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    image: {
        maxWidth: 100,
        maxHeight: 100,
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 2
    },
    nameAuthorContainer: {
        flex: 1,
        gap: 2
    },
    title: {
        color: Colors.primary,
        fontFamily: "Nunito",
        fontSize: 18,
        fontWeight: "700",
    },
    author: {
        color: "#7D7D7D",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "500",
    }
})