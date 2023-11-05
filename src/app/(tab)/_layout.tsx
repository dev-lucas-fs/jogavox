import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import MainTab from "@/components/MainTab";
import { SafeAreaView, StyleSheet } from "react-native"
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
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
                        title: "Home",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons
                                name="grid-outline"
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
                 <Tabs.Screen 
                    name="download"
                    options={{
                        title: "download",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons
                                name="download-outline"
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
                <Tabs.Screen 
                    name="settings"
                    options={{
                        title: "settings",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons
                                name="settings-outline" 
                                size={25} 
                                color={color}
                            />
                        )
                    }}
                />
            </MainTab>
            <StatusBar style="light" backgroundColor={Colors.primary} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})