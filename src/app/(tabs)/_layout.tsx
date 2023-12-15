import { Tabs } from "expo-router"
import { StyleSheet, View } from "react-native";
import Icon from '@expo/vector-icons/Feather';
import Colors from "@/constants/Colors";


export default function Layout() {

    return (
        <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: "#FFF",
                    position: 'absolute',
                    borderTopWidth: 0,
                    gap: 0,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                },
                tabBarActiveTintColor: "#FFF",   
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#BABABA",
              }}>
            <Tabs.Screen name="library" options={{ tabBarIcon: ({ size, color }) => <CustomIcon name='home' color={color} />  }}/>
            <Tabs.Screen name="store" options={{ tabBarIcon: ({ size, color }) => <CustomIcon name='shopping-bag' color={color} />  }}/>
            <Tabs.Screen name="settings" options={{ tabBarIcon: ({ size, color }) => <CustomIcon name='settings' color={color} />  }}/>
        </Tabs>
    );
}

function CustomIcon({ color, name } : { color: string, name: string }) {
    return (
      <View style={[{ backgroundColor: (color === "#FFF" ? Colors.primary : "#fff") }, styles.iconContainer]}>
        {
            //@ts-ignore
            <Icon name={name} size={23} color={color} />
        }
      </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        padding:  10,
        borderRadius: 15
    }
})