import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation"
import * as NavigationBar from 'expo-navigation-bar';
import Icon from '@expo/vector-icons/Ionicons';


import Colors from "@/constants/Colors";

interface Props extends React.PropsWithChildren {
    isBack?: boolean;
}

async function forcePORTRAIT() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    await NavigationBar.setVisibilityAsync("visible");
}

export default function TabLayout({ isBack, children } : Props) {
    useEffect(() => {    
        forcePORTRAIT();
    }, [])

    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { justifyContent: isBack ? "space-between" : "center" }]}>
                {
                    isBack ? <Icon size={28} name="chevron-back-outline" /> : null
                }    
                <Image style={{ width: 140, height: 26 }} source={require("assets/images/logo.png")} />
                <View />
            </View>
            <ScrollView nestedScrollEnabled style={{ flex: 1 }}>
                {
                    children
                }
            </ScrollView>
            <StatusBar style="dark" backgroundColor={Colors.background} />
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
        backgroundColor: Colors.background,
    },
    headerContainer: { 
        alignItems: "center", 
        flexDirection: "row", 
        paddingHorizontal: 20 
    }
});