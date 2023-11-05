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
                    backgroundColor: Colors.tabBar.backgroundColor,
                    position: 'absolute',
                    borderTopWidth: 0
                },
                tabBarActiveTintColor: Colors.primary,   
                tabBarShowLabel: false ,
                tabBarInactiveTintColor: "#C6C6C6"    
            }}
           
        >
            {
                children
            }
        </Tabs>
    );
}

