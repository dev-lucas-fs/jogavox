import { Button, StyleSheet } from 'react-native';
import TabLayout from '@/layouts/TabLayout';
import { useContext } from 'react';
import { CurrentGameContext } from '@/Contexts/CurrentGameContext';


export default function Settings() {
    const context = useContext(CurrentGameContext)

    return (
        <TabLayout>
            <Button onPress={() => {
                context.clear();
            }} title='Reset' />
        </TabLayout>
    );
}


const styles = StyleSheet.create({
   
});
