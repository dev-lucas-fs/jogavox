import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function Game() {
    const params = useLocalSearchParams()

    return (
        <View>
            <Text>Lugar {params.place}</Text>
            <Text>Slide {params.slide}</Text>
        </View>
    )
}