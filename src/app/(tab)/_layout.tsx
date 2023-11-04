import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import MainTab from "@/components/MainTab";
import { SafeAreaView, StyleSheet } from "react-native"
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";


export default function AppLayout() {

    return (
        <SafeAreaView style={styles.container}>
            <MainTab>
                <Tabs.Screen 
                    name="index"
                    options={{
                        title: "Home",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons
                                name="grid-sharp" 
                                size={25} 
                                color={Colors.primary}
                            />
                        )
                    }}
                />
            </MainTab>
            <StatusBar style="light" backgroundColor={Colors.primary} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    }
})