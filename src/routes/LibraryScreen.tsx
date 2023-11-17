import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Edit from '../Components/Edit';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import GameImage from '../Components/GameImage';
import Amount from '../Components/Amount';
import { SafeAreaView } from 'react-native';
import Tag from '../Components/Tag';

//@ts-ignore
export default function LibraryScreen({ navigation } : NativeStackScreenProps) {

    useEffect(() => {
        
        
    }, [])
    
    return (
        <>
            <View style={styles.containerEdit}>
                <Edit 
                    icon='search' 
                    placeholder='Procure pelo nome' />
            </View>
            
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={[styles.sectionContainer, { flex: 1 }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={styles.sectionText}>Jogos Instalados</Text>
                            <Amount n={2} />
                        </View>
                        <Tag size='large' />
                    </View>

                    <View style={{ flex: 1 }}>
                        <FlatList 
                            data={[1, 2]} 
                            renderItem={({ item }) => <GameImage /> } 
                            contentContainerStyle={{ gap: 15, paddingBottom: 20, paddingTop: 10 }}
                            numColumns={2}
                            horizontal={false}
                            columnWrapperStyle={{ gap: 10 }}/>
                    </View>
                </View>

                <View style={[styles.sectionContainer, { flex: 1 }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Text style={styles.sectionText}>Jogos Instalados</Text>
                            <Amount n={2} />
                        </View>
                        <Tag size='large' isModern={false} />
                    </View>

                    <View style={{ flex: 1 }}>
                        <FlatList 
                            data={[1, 2]} 
                            renderItem={({ item }) => <GameImage /> } 
                            contentContainerStyle={{ gap: 15, paddingBottom: 20, paddingTop: 10 }}
                            numColumns={2}
                            horizontal={false}
                            columnWrapperStyle={{ gap: 10 }}/>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    containerEdit: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    sectionText: {
        color: "#FFF",
        fontFamily: "Barlow-Regular",
        fontSize: 20,
        fontWeight: "700",
    },
    sectionContainer: {
        gap: 15,
        marginTop: 20,
    }
});