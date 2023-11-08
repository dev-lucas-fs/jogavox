import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


interface IProps extends React.PropsWithChildren {
    title: string;
}

export default function Layout({ title, children }: IProps) {

    return (
        <>
            <View style={styles.container}>
                <>
                    <Text style={styles.title}>{ title }</Text>
                    <View style={styles.background} />
                    {
                        children
                    }   
                </>
            </View>
            <StatusBar style="light" backgroundColor={Colors.primary} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#fff",
        maxHeight: Dimensions.get("window").height - 70,
        paddingBottom: 20
    },
    background: {
        top: 0,
        left: 0,
        position: "absolute",
        width: '100%',
        height: '40%',
        backgroundColor: Colors.primary,
        zIndex: -1
    },
    title: {
        fontSize: 28,
        fontFamily: "Nunito",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30
    }

});