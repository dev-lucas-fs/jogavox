import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";


interface Props extends React.PropsWithChildren {
    title: string;
}

export default function Layout({ title, children } : Props) {

    return (
        <View style={styles.container}>
            <>
                <Text style={styles.title}> { title } </Text>
                {
                    children
                }
            </>
            <StatusBar backgroundColor={"#212121"} />
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontFamily: "Barlow-Regular",
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
    container: {
        flex: 1,
        width: "100%",
        paddingBottom: 90,
        gap: 10,
        paddingTop: 20,
        position: "relative",
        backgroundColor: "#212121",
    }
});