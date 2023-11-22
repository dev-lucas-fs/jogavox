import { View, Text, ImageBackground } from "react-native";
import { useContext, useState, useEffect } from 'react'

import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { LugarType, SlideType } from "@/core/JOG";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";


export default function Slide() {
    const context = useContext(CurrentGameContext);
    const lugar = context.gameData.lugares[context.gameState.lugar - 1];
    const [data, setData] = useState<{ midia: string; fundo: string; textos?: Array<string>}>({ midia: "", fundo: "" });

    async function handleData() {
        if(lugar === null) return;

        const info =  lugar.slides[context.gameState.slide - 1]

        if(lugar.fundo) {
            const files = JSON.parse(await AsyncStorage.getItem(context.id + ""));
            const keys = Object.keys(files);
            for(let key of keys) {
                if(key === lugar.fundo)
                    data.fundo = files[key];
            }
        }

        if(info.midia) {
            const files = JSON.parse(await AsyncStorage.getItem(context.id + ""));
            const keys = Object.keys(files);
            for(let key of keys) {
                if(key === info.midia)
                    data.midia = files[key];
            }
        }

        setData(() => data);
    }

    async function handleSound() {
        const { sound } = await Audio.Sound.createAsync({ uri: data.midia });
        await sound.playAsync()
    }

    useEffect(() => {
        handleData();
    }, [lugar])

    useEffect(() => {
        console.log(data);
        handleSound();
    }, [data])

    if(!data) return;

    return (
        <View style={{ flex: 1 }}>
           {
            data.fundo !== "" 
            ?  <ImageBackground style={{ flex: 1 }} resizeMode="cover" source={{ uri: data.fundo }}>
                    {
                        
                    }
                </ImageBackground>
            : null
           }
            
        </View>
    );
}