
import { Dimensions, FlatList } from 'react-native';
import { View, Text } from 'react-native';
import DownloadItem from '../Components/DownloadItem';
import { StyleSheet } from 'react-native';
import Edit from '../Components/Edit';
import Carousel from 'react-native-snap-carousel'
import { useRef } from 'react';

// "https://drive.google.com/uc?export=download&id=1MvBSkGzKpE9P0nMrlaaIe2dtA9kSZ_t9"

export default function DownloadScreen() {
    const width = Dimensions.get('window').width;
    const isCarousel = useRef(null)
    return (
        <>
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
        </>
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
        fontFamily: "Barlow-Regular",
        fontSize: 20,
        fontWeight: "700",
        paddingHorizontal: 20,
    },
    sectionContainer: {
        gap: 15,
        marginTop: 20
    }
});