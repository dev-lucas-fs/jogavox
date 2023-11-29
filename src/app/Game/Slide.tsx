import { View, Text, ImageBackground, TextComponent } from "react-native";
import { useContext, useState, useEffect } from 'react'
import React from 'react';

import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { Audio } from "expo-av";
import { router } from "expo-router";
import * as Speech from 'expo-speech';

import SpeechOptions from "@/config/SpeechConfig";
import Next from "@/components/Next";


export default function Slide() {
    const context = useContext(CurrentGameContext);
    const [showNext, setShowNext] = useState<boolean>(true);
    const lugar = context.gameData.lugares[context.gameState.lugar];
    const slide = lugar.slides[context.gameState.slide];

    async function load() {

        if(slide.midia) {
            const sound = await handleSound(slide.midia);
            await sound.playAsync();
        }
        
        if(slide.textos) {
            Speech.speak(
                slide.textos.reduce((prev, curr) => prev + "\n" + curr, ""),
                SpeechOptions
            )
        }
    }

    useEffect(() => { load() }, [])


    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Background fundo={lugar.fundo}>
                {
                    
                }
            </Background>  

           <Next showNext={showNext} />   
        </View>
    );
}

async function handleSound(uri: string) {
    if(!uri) return;

    const sound = new Audio.Sound();
    await sound.loadAsync({ uri });
    return sound
}


interface Props extends React.PropsWithChildren {
    fundo?: string;
}

const Background = ({ children, fundo = "" } : Props) => {
    if(!fundo) {
        return (
            <View style={{ flex: 1 }}>
                {
                    children
                }
            </View>
        );
    }

    return (
        <ImageBackground style={{ flex: 1, alignItems: "center", justifyContent: "center" }} resizeMode="cover" source={{ uri: fundo }}>
            {
                children
            }
        </ImageBackground>
    );
}