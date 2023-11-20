import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation"
import * as NavigationBar from 'expo-navigation-bar';

interface Props extends React.PropsWithChildren {
    title: string;
}

async function forcePORTRAIT() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    await NavigationBar.setVisibilityAsync("visible");
}

export default function TabLayout({ title, children } : Props) {
    useEffect(() => {    
        forcePORTRAIT();
    }, [])

    return (
        <View style={styles.container}>
            <>
                <Text style={styles.title}> { title } </Text>
                <ScrollView nestedScrollEnabled style={{ flex: 1 }}>
                    {
                        children
                    }
                </ScrollView>
            </>
            <StatusBar style="light" backgroundColor={"#212121"} />
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        fontFamily: "Barlow_Black",
        fontSize: 36,
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