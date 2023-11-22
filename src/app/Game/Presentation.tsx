import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, Button, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useContext, useState, useEffect } from 'react'
import * as Speech from 'expo-speech';
import { router } from "expo-router";
import Icon from '@expo/vector-icons/Feather';


import Square from "@/components/Square";
import { DadosGeraisType } from "@/core/JOG";
import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import SpeechOptions from "@/config/SpeechConfig";
import { download } from "@/core/GameDownloader";
import AsyncStorage from "@react-native-async-storage/async-storage";


const defaultDadosGerais = {
    autor: "",
    nomeJogo: "carregando...",
    versao: "",
    comentarios: [""]
}


export default function Presentation() {
    const context = useContext(CurrentGameContext);
    const [dadosGerais, setDadosGerais] = useState<DadosGeraisType>(defaultDadosGerais);
    const [speaking, setSpeaking] = useState<boolean>(true)
    const [showNext, setShowNext] = useState<boolean>(true)
    const [img, setImg] = useState<string>("")
    
    async function goNextSlide() {
        //@ts-ignore
        router.replace("/Game/Slide");
    }

    useEffect(() => {
        if(!context.gameData) return;

        setDadosGerais(() => context.gameData.dadosGerais)
    }, [context.gameData])

    useEffect(() => {
        if(!context.gameData || !context.gameData.modelo.narrando || dadosGerais.nomeJogo === "carregando..." || !speaking) 
            return;

        const speechOptions = {
            ...SpeechOptions,
            ...{
                onDone: () => {
                    if(showNext)
                        setShowNext(() => false);
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

        setSpeaking(() => false);
    }, [dadosGerais])

    return (
        <LinearGradient 
            colors={['#0B081D', '#130C2F']}
            end={{ x: 0.49, y: 0.02 }}
            start={{ x: 0.96, y: 0.87 }}
            style={styles.container}>
            <View style={styles.left}>
                <Square style={{ width: "60%", marginLeft: -10, transform: "rotate(225deg)"}}/>
                <Text style={[styles.authorVersion, { paddingLeft: 20 }]}>Autor: { dadosGerais.autor }</Text>
            </View>
            <View style={styles.mid}>
                <View> 
                    <Button title="Baixar" onPress={() => {}}/>
                </View>
                <View style={{ alignItems: "center", gap: 5 }}>
                    <Text style={styles.title}>{ dadosGerais.nomeJogo }</Text>
                    <Image style={{ width: 150, aspectRatio: 1 }} source={{ uri: "file:///data/user/0/com.dosvox.jogavox/files/games/1/2015_3_meio_ambiente/1.jpg" }} />
                    <Text style={styles.comments}>{ dadosGerais.comentarios }</Text>
                </View>
                <Square style={{ width: "20%", marginBottom: "-12%", transform: "rotate(45deg)" }}/>
            </View>
            <View style={styles.right}>
                <Square style={{ width: "60%", marginLeft: 10 }}/>
                <Text style={[styles.authorVersion, { paddingRight: 20 }]}>Versão: { dadosGerais.versao }</Text>
            </View>

            {
                !showNext
                ?   (
                        <View style={[styles.next, { height: !showNext ? Dimensions.get('screen').height : "100%"}]}>
                            <TouchableNativeFeedback onPress={goNextSlide}>
                                <View
                                    style={{ backgroundColor: "rgba(255, 255, 255, .05)", width: "100%", flex: 1, alignItems: "center", justifyContent: "center"  }}>
                                    <Icon style={{ alignSelf: "center" }} name="arrow-right-circle" color={"#fff"} size={46} />
                                </View>
                            </TouchableNativeFeedback>
                        </View> 
                    ) 
                : null
            }
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    left: {
        width: "25%",
        justifyContent: "space-between"
    },
    mid: {
        width: '50%',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10
    },
    right: {
        width: "25%",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    title: {
        color: "#FFF",
        fontFamily: "Barlow_Black",
        fontSize: 36,
        textAlign: "center",
        
    },
    comments: {
        color: "#fff",
        fontFamily: "Barlow",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "100"
    },
    authorVersion: {
        color: "#FFF",
        fontFamily: "Barlow",
        fontSize: 14,
        fontWeight: "700",
        paddingBottom: 20,
    },
    next: { 
        position: "absolute", 
        right: 0, 
        width: "20%", 
        height: Dimensions.get("window").height,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});