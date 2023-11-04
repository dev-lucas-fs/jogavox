import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { PropsWithChildren } from "react";

export default function MainTab({ children }: PropsWithChildren) {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    borderTopLeftRadius: 20, 
                    borderTopRightRadius: 20,
                    backgroundColor: Colors.tabBar.backgroundColor
                },
                tabBarActiveTintColor: Colors.primary,           
            }}
           
        >
            {
                children
            }
        </Tabs>
    );
}

