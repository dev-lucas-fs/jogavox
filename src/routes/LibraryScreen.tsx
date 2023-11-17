import { View, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Edit from '../Components/Edit';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { useEffect } from 'react';
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
            

        </>
    );
}


const styles = StyleSheet.create({
    containerEdit: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    listContainer: {
        flex: 1,
        width: "100%",
        marginTop: 30
    }
});