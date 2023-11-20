import { View, Text } from "react-native";
import { useContext, useState, useEffect } from 'react'

import { CurrentGameContext } from "@/contexts/CurrentGameContext";
import { LugarType, SlideType } from "@/core/JOG";


export default function Slide() {
    const context = useContext(CurrentGameContext);
    const [data, setData] = useState<SlideType>(null);

    useEffect(() => {
        const lugares = context.gameData.lugares[context.gameState.lugar - 1];
        const info =  lugares.slides[context.gameState.slide - 1]

        setData(() => info);
    }, [])

    if(!data) return;

    return (
        <View>
            <Text>SLIDE</Text>
        </View>
    );
}