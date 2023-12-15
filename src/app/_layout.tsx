import { Slot, router } from "expo-router";
import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CurrentGameProvider from "@/Contexts/CurrentGameContext";
import DimensionContextProvider from "@/Contexts/DimensionContext";


SplashScreen.preventAutoHideAsync();

const fonts = {
    'Montserrat': require('$/fonts/Montserrat-Regular.ttf'),
    'Montserrat_Black': require('$/fonts/Montserrat-Black.ttf'),
    'Montserrat_Medium': require('$/fonts/Montserrat-Medium.ttf'),
    'Montserrat_Bold': require('$/fonts/Montserrat-Bold.ttf'),
};

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts(fonts);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
        
    }, [fontsLoaded, fontError]);

    useEffect(() => {
        if(fontsLoaded)
            router.replace("/library");

    }, [fontsLoaded]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <DimensionContextProvider>
            <CurrentGameProvider>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
                        <Slot/>
                        <StatusBar />
                    </SafeAreaView>
                </SafeAreaProvider>
            </CurrentGameProvider>
        </DimensionContextProvider>
    );
}