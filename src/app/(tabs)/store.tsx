import { Dimensions, FlatList, View, Text, StyleSheet } from 'react-native';
import { useRef } from 'react';
import Carousel from 'react-native-snap-carousel'

import Edit from '@/components/Edit';
import Amount from '@/components/Amount';
import ListItem from '@/components/Store/ListItem';
import TabLayout from '@/layouts/TabLayout';

// "https://drive.google.com/uc?export=download&id=1MvBSkGzKpE9P0nMrlaaIe2dtA9kSZ_t9"

export default function Store() {
    const width = Dimensions.get('window').width;
    const isCarousel = useRef(null)
    return (
        <TabLayout title='LojaVox'>
            <View style={styles.containerEdit}>
                <Edit 
                    icon='search' 
                    placeholder='Procure pelo nome' />
            </View>
            
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>Recomendado</Text>

                <View style={{ alignItems: "center" }}>
                    <Carousel
                        vertical={false}
                        layout="default"
                        layoutCardOffset={2}
                        ref={isCarousel}
                        data={[1, 2, 3]}
                        renderItem={() => <View style={{ width: 200, height: 200, backgroundColor: "#d6d6d6", borderRadius: 5 }} />}
                        sliderWidth={width}
                        itemWidth={200}
                        inactiveSlideShift={0}
                        useScrollView={true}
                        firstItem={1}
                    />
                </View>

            </View>

            <View style={[styles.sectionContainer, { flex: 1 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <Text style={styles.sectionText}>Coleção Completa</Text>
                    <Amount n={3} />
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList 
                        scrollEnabled={false}
                        nestedScrollEnabled
                        contentContainerStyle={{ gap: 25, padding: 20 }} 
                        data={[1, 2, 4]} 
                        renderItem={ ({ item }) => <ListItem /> } />
                </View>
            </View>
        </TabLayout>
    );
}

//<DownloadItem />

const styles = StyleSheet.create({
    containerEdit: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    listContainer: {
        flex: 1,
        width: "100%",
        marginTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    listStyle: {
        shadowColor: '#171717',  
        shadowRadius: 10,  
        shadowOpacity: 0.2,  
        elevation: 5,
        borderStartColor: "transparent",
        backgroundColor: "#FCFCFC", 
        borderRadius: 5,
    },
    sectionText: {
        color: "#FFF",
        fontFamily: "Barlow",
        fontSize: 20,
        fontWeight: "700",
        paddingLeft: 20,
    },
    sectionContainer: {
        gap: 15,
        marginTop: 20,
    }
});