import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from "expo-screen-orientation"
import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar";
import Square from "@/components/Square";
import * as Speech from 'expo-speech';
import { useLocalSearchParams } from "expo-router";
import useLocalGames, { LocalGameType } from "@/hooks/useLocalGames";
import NextSlide from "@/components/NextSlide";
import { router } from 'expo-router';

export default function Presentation() {
    const params = useLocalSearchParams()
    const games = useLocalGames();
    const [gameInfo, setGameInfo] = useState<LocalGameType>();
    const [hideNextSlide, setHideNextSlide] = useState<boolean>(false);

    function handleSpeech() {
        if(!gameInfo) return;

        const textToSpeech = `
            ${gameInfo.name}\n
            Autor: ${gameInfo.author}\n
            Versão: ${gameInfo.version}\n
            ${gameInfo.comments}
        `;

        Speech.speak(textToSpeech, {
            language: "PT-BR",
            rate: 1.35,
            onDone: () => {
                Speech.speak("Toque na seta da direita para continuar...", {
                    language: "PT-BR",
                    rate: 1.15
                });
                setHideNextSlide(true);
            }
        });
    }

    function findGame() {
        const game = games.find(({ id }) => id === Number(params.id));
        if(!game) return;

        setGameInfo(() => game);
    }

    async function handleOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
    }

    function handleNextSlide() {
        router.replace({
            params: {
                id: params.id,
                place: 0,
                slide: 0,
            },
            pathname: "/Game"
        });
    }

    useEffect(() => {
        findGame();
        setHideNextSlide(false);
    }, [])

    useEffect(() => {
        handleOrientation()
        handleSpeech();
    }, [gameInfo])

    return (
        <LinearGradient 
            colors={['#FF7037', '#B63400']}
            end={{ x: 0.49, y: 0.02 }}
            start={{ x: 0.96, y: 0.87 }}
            style={styles.container} 
        >
            { /* SOMENTE VISUAL */ }
            <View style={styles.squares}>
                <View style={styles.squareHorizontal}>
                    <Square style={{ marginLeft: "-8%" }} />
                    <Square style={{ marginRight: "-8%" }} />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={[{ paddingLeft: 20 },styles.authorVersion]}>{ gameInfo?.author }</Text>
                <View style={styles.mid}>
                    <Image style={styles.image} source={{ uri: gameInfo?.image }} />
                    <Text style={styles.title}>{ gameInfo?.name }</Text>
                    <Text style={styles.comments}> { gameInfo?.comments } </Text>
                    <Square style={{ 
                        position: "absolute", 
                        alignSelf: "flex-end", 
                        right: "50%",
                        bottom: -60,
                    }} />
                </View>
                <Text style={[{ paddingRight: 20 },styles.authorVersion]}>Versão: 1.0</Text>
            </View>
            
            {
                hideNextSlide 
                ? <NextSlide onPress={handleNextSlide}/>
                : null
            }
            <StatusBar hidden={true} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    squares: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        zIndex: 0
    },
    squareHorizontal: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",

    },
    squareVertical: {
        width: "100%",
        flex: 1,
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "row"
    },
    mid: {
        paddingTop: 20,
        flex: 1,
        gap: 10
    },
    title: {
        color: "#FFF",
        fontFamily: "SpicyRice",
        fontSize: 28,
        textAlign: "center"
    },
    comments: {
        color: "#fff",
        fontFamily: "Nunito",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "100"
    },
    image: {
        borderWidth: 5,
        borderColor: "#fff",
        width: Dimensions.get("screen").width < 140 ? "20%" : 140,
        borderRadius: 500,
        aspectRatio: 1/1,
        objectFit: "cover",
        alignSelf: "center"
    },
    authorVersion: {
        color: "#FFF",
        fontFamily: "Nunito",
        fontSize: 14,
        fontWeight: "700",
        alignSelf: "flex-end",
        paddingBottom: 20,
    }
})