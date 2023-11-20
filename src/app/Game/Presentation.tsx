import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from "expo-screen-orientation"
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from "expo-status-bar";
import { useContext, useState, useEffect } from 'react'
import * as Speech from 'expo-speech';

import Square from "@/components/Square";
import { DadosGeraisType } from "@/core/JOG";
import { CurrentGameContext } from "@/contexts/CurrentGameContext";



async function forceLANDSCAPE() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    await NavigationBar.setVisibilityAsync("hidden");
}


export default function Presentation() {
    forceLANDSCAPE();

    const context = useContext(CurrentGameContext);
    const [dadosGerais, setDadosGerais] = useState<DadosGeraisType>({
        autor: "",
        nomeJogo: "carregando...",
        versao: "",
        comentarios: [""]
    });
    const [speaking, setSpeaking] = useState<boolean>(true)

    useEffect(() => {
        if(!context.gameData) return;

        setDadosGerais(() => context.gameData.dadosGerais)
    }, [context.gameData])

    useEffect(() => {
        if(!context.gameData || !context.gameData.modelo.narrando || dadosGerais.nomeJogo === "carregando..." || !speaking) return;

        Speech.speak(`
            ${dadosGerais.nomeJogo}.\n
            Autor: ${dadosGerais.autor}.\n
            ${dadosGerais.comentarios}.\n
            Versão: ${dadosGerais.versao}.\n
            \n\n\n
        `, {
            rate: 1.15
        });

        setSpeaking(false);
    }, [dadosGerais])

    if(!dadosGerais) return null;

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
                <View />
                <View style={{ alignItems: "center", gap: 5 }}>
                    <Text style={styles.title}>{ dadosGerais.nomeJogo }</Text>
                    <Text style={styles.comments}>{ dadosGerais.comentarios }</Text>
                </View>
                <Square style={{ width: "20%", marginBottom: "-12%", transform: "rotate(45deg)" }}/>
            </View>
            <View style={styles.right}>
                <Square style={{ width: "60%", marginLeft: 10 }}/>
                <Text style={[styles.authorVersion, { paddingRight: 20 }]}>Versão: { dadosGerais.versao }</Text>
            </View>
            <StatusBar hidden={true} />
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
    }
});