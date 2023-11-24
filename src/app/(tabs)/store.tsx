import { View, Text, StyleSheet } from 'react-native';

import TabLayout from '@/layouts/TabLayout';
import Colors from '@/constants/Colors';
import StoreList from '@/components/Lists/StoreList';
import RecommendedList from '@/components/Lists/RecommendList';

export default function Store() {
    return (
        <TabLayout>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>Jogos Recomendados</Text>
                <RecommendedList />
            </View>

            <View style={[styles.sectionContainer, { flex: 1 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <Text style={styles.sectionText}>Coleção Completa</Text>
                </View>

                <StoreList />
            </View>
        </TabLayout>
    );
}


const styles = StyleSheet.create({
    sectionText: {
        color: Colors.text,
        fontFamily: "Montserrat_Bold",
        fontSize: 20,
        paddingLeft: 20,
    },
    sectionContainer: {
        gap: 10,
        marginTop: 20,
    }
});