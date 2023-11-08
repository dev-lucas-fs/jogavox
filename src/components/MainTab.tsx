import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { PropsWithChildren } from "react";

export default function MainTab({ children }: PropsWithChildren) {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: "#fff",
                    position: 'absolute',
                    borderTopWidth: 0,
                    overflow: "hidden"
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

