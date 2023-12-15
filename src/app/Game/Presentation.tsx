import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, Button, Image, ImageBackground } from "react-native";
import { useContext, useState, useEffect } from 'react'
import * as Speech from 'expo-speech';
import { router } from "expo-router";
import { useNavigation } from 'expo-router';

import { CurrentGameContext } from "@/Contexts/CurrentGameContext";
import SpeechOptions from "@/config/SpeechConfig";
import Next from "@/Components/Next";
import { DadosGeraisType } from "@/core/JOGTypes";

export default function Presentation() {
    const context = useContext(CurrentGameContext);
    const [dadosGerais, setDadosGerais] = useState<DadosGeraisType>(context.gameData.dadosGerais);
    const [showNext, setShowNext] = useState<boolean>(false);
    const navigation = useNavigation();


    async function goNextSlide() {
        context.resetGameState();
        //@ts-ignore
        router.replace("/Game/Slide");
    }


    useEffect(() => {

        const speechOptions = {
            ...SpeechOptions,
            ...{
                onDone: () => {
                    setShowNext(() => true);
                }
            }
        }

        Speech.speak(`
            ${dadosGerais.nomeJogo}.\n
            Autor: ${dadosGerais.autor}.\n
            ${dadosGerais.comentarios}.\n
            Versão: ${dadosGerais.versao}.\n
            \n\n
            Toque na direita para continuar...
        `,  speechOptions)


        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Speech.stop();
            navigation.dispatch(e.data.action);
        });
    }, [])

    return (
        <ImageBackground style={styles.container} source={require("assets/images/bg.png")}>
            <View style={styles.container}> 
                <View style={styles.left}>
                    <Text style={[styles.authorVersion, { paddingLeft: 20 }]}>Autor: { dadosGerais.autor }</Text>
                </View>
                <View style={styles.mid}>
                    <View style={{ alignItems: "center", gap: 5 }}>
                        <Image style={{ width: 130, aspectRatio: 1, borderRadius: 200 }} source={{ uri: context.gameData.image  }} />
                        <Text style={styles.title}>{ dadosGerais.nomeJogo }</Text>
                        <Text style={styles.comments}>{ dadosGerais.comentarios }</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={[styles.authorVersion, { paddingRight: 20 }]}>Versão: { dadosGerais.versao }</Text>
                </View>
            </View>
            <Next showNext={showNext} onPress={goNextSlide} />                
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",

    },
    left: {
        width: "25%",
        justifyContent: "flex-end"
    },
    mid: {
        width: '50%',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20
    },
    right: {
        width: "25%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    title: {
        color: "#FFF",
        fontFamily: "Montserrat_Black",
        fontSize: 36,
        textAlign: "center",
        
    },
    comments: {
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "100"
    },
    authorVersion: {
        color: "#FFF",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontWeight: "700",
        paddingBottom: 20,
    }
});