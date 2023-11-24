import { Slot, router } from "expo-router";
import { useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CurrentGameProvider from "@/contexts/CurrentGameContext";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   
    
    const [fontsLoaded, fontError] = useFonts({
        'Montserrat': require('$/fonts/Montserrat-Regular.ttf'),
        'Montserrat_Black': require('$/fonts/Montserrat-Black.ttf'),
        'Montserrat_Medium': require('$/fonts/Montserrat-Medium.ttf'),
        'Montserrat_Bold': require('$/fonts/Montserrat-Bold.ttf'),
    });

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
        <CurrentGameProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
                    <Slot/>
                    <StatusBar />
                </SafeAreaView>
            </SafeAreaProvider>
        </CurrentGameProvider>
    );
}