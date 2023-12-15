import { FlatList, Text, View } from "react-native";
import Cover from "../Cover";
import { useContext } from "react";
import Colors from "@/constants/Colors";
import { CurrentGameContext } from "@/Contexts/CurrentGameContext";
import { router } from "expo-router";
import { DimensionContext } from "@/Contexts/DimensionContext";



export default function InstalledList() {
    const context = useContext(CurrentGameContext);
    const { dimensions } = useContext(DimensionContext);
  
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
                        width={(dimensions.width - 50) / 2} 
                        title={item.dadosGerais.nomeJogo} 
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
