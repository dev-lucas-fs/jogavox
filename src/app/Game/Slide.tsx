import { View, Text, ImageBackground } from "react-native";
import { useContext, useState, useEffect } from 'react'

import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";


export default function Slide() {
    const context = useContext(CurrentGameContext);
    const lugar = context.gameData.lugares[context.gameState.lugar];
    const slide= lugar.slides[context.gameState.slide];


    async function handleSound() {
        if(!slide.midia) return;

        const { sound } = await Audio.Sound.createAsync({ uri: slide.midia });
        console.log(sound)
        await sound.playAsync()
    }

    useEffect(() => {
        handleSound();
    }, [])



    return (
        <View style={{ flex: 1 }}>
           {
            lugar.fundo 
            ?  <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={{ uri: lugar.fundo }}>
                    {
                        
                    }
                </ImageBackground>
            : null
           }
            
        </View>
    );
}