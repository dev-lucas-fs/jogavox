import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import Cover from "../Cover";
import { useContext, useState } from "react";
import Colors from "@/constants/Colors";
import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { router } from "expo-router";



export default function InstalledList() {
    const context = useContext(CurrentGameContext);
    const coverWidth = (Dimensions.get("screen").width - 40) / 2 - 15 / 2;
    
    function startGame(id: string) {
        context.changeCurrentGame(id);
        router.push("/Game/Presentation");
        
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                nestedScrollEnabled
                data={context.installedGames} 
                renderItem={({ item }) => (
                    <Cover 
                        onPress={() => startGame(item.id)} 
                        width={coverWidth} 
                        title={item.dadosGerais.nomeJogo } 
                        uri={item.image} />
                )} 
                contentContainerStyle={{ gap: 15, paddingBottom: 20, paddingTop: 10 }}
                numColumns={2}
                horizontal={false}
                columnWrapperStyle={{ gap: 10 }}
                scrollEnabled={false} 
                keyExtractor={(item) => item.id }
                ListEmptyComponent={
                    <Text style={{ textAlign: "center", paddingTop: 20, fontFamily: "Montserrat_Medium", fontSize: 16, color: Colors.text}}>
                        Não possui nenhum jogo instalado
                    </Text>
                }/>
        </View>
    );
}
