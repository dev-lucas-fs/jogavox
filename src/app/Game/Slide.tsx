import { View, Text, ImageBackground, TextComponent } from "react-native";
import { useContext, useState, useEffect } from 'react'
import React from 'react';

import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { Audio } from "expo-av";
import Next from "@/components/Next";
import { router } from "expo-router";


export default function Slide() {
    const context = useContext(CurrentGameContext);
    const [showNext, setShowNext] = useState<boolean>(true);
    const lugar = context.gameData.lugares[context.gameState.lugar];
    async function load() {
        const slide = context.gameData.lugares[context.gameState.lugar].slides[context.gameState.slide];
        if(slide === undefined) return;

        const playsound = await handleSound(slide.midia);
        
    }

    useEffect(() => { load() }, [context.gameState])
    useEffect(() => { load() }, [])

    if(lugar === undefined) {
        console.log(context.gameState.lugar)
    }

 
    
    return (
        <View style={{ flex: 1 }}>
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

    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync()
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