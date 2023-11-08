import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';
import MainTab from "@/components/MainTab";
import { SafeAreaView, StyleSheet } from "react-native"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();


export default function AppLayout() {
    const [fontsLoaded, fontError] = useFonts({
        'Nunito': require('assets/fonts/Nunito.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <MainTab>
                <Tabs.Screen 
                    name="index"
                    options={{
                        title: "Biblioteca",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather
                                name="home"
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
                 <Tabs.Screen 
                    name="Download"
                    options={{
                        title: "Download",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather
                                name="download"
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Settings"
                    options={{
                        title: "Settings",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather
                                name="settings" 
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
            </MainTab>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})