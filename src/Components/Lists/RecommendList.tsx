import { Dimensions, FlatList, Text, View } from "react-native";
import Cover from "../Cover";
import { useEffect, useState } from "react";
import collection, { CollectionType } from "@/core/JOGCollection";


export default function RecommendedList() {
    const [data] = useState<CollectionType[]>(collection.slice(0, 3));

    return (
        <View style={{ flex:1, height: 240 }}>
            <FlatList 
                data={data} 
                renderItem={({ item }) => <Cover title={item.name} uri={item.image} /> } 
                contentContainerStyle={{ gap: 15, paddingBottom: 20, paddingTop: 10, paddingHorizontal: 20 }}
                horizontal={true} />
        </View>
    );
}
