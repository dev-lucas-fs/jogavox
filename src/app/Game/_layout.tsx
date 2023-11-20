import { View, StyleSheet, Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation"
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";



async function forceLANDSCAPE() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    await NavigationBar.setVisibilityAsync("hidden");
}

export default function Layout() {
    forceLANDSCAPE();

    return (
        <View style={styles.container}>
            <Slot />
                        
            <StatusBar hidden={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: Dimensions.get("window").height,
    },
});