import { View, Text, ImageBackground, TextComponent } from "react-native";
import { useContext, useState, useEffect } from 'react'
import React from 'react';
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';

import { CurrentGameContext } from "@/Contexts/CurrentGameContext";
import Answer from "@/Components/Slide/Answer";
import SpeechOptions from "@/config/SpeechConfig";
import { useNavigation } from 'expo-router';

export default function Slide() {
    const context = useContext(CurrentGameContext);
    const navigation = useNavigation();

    const lugar = context.gameData.lugares[context.gameState.lugar];
    const modelo = context.gameData.modelo;
    const slide = lugar.slides[context.gameState.slide];


    async function load() {
        if(slide.midia) {
            const sound = await handleSound(slide.midia);
            await sound.playAsync();
        }
        
        if(slide.textos && modelo.narrando) {
            Speech.speak(
                slide.textos.reduce((prev, curr) => prev + "\n" + curr, ""),
                SpeechOptions
            )
        }
    }

    useEffect(() => { 
        load() 
    
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Speech.stop();
            navigation.dispatch(e.data.action);
        });
        
    }, [])


    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Background fundo={lugar.fundo}>
                {
                    
                }
            </Background>  
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
