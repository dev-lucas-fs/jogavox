import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons';

export default function AppLayout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather 
                            name="home" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
}

