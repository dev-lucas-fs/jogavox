import { Tabs } from "expo-router"
import { StyleSheet, View } from "react-native";
import Icon from '@expo/vector-icons/Feather';


export default function Layout() {

    return (
        <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    backgroundColor: "#4B4B4B",
                    position: 'absolute',
                    borderTopWidth: 0,
                    gap: 0
                },
                tabBarActiveTintColor: "#FFF",   
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "#BABABA",
              }}>
            <Tabs.Screen name="library" options={{ tabBarIcon: ({ size, color }) => <CustomIcon name='home' color={color} />  }}/>
            <Tabs.Screen name="store" options={{ tabBarIcon: ({ size, color }) => <CustomIcon name='shopping-bag' color={color} />  }}/>

        </Tabs>
    );
}

function CustomIcon({ color, name } : { color: string, name: string }) {
    return (
      <View style={[{ backgroundColor: (color === "#FFF" ? "#fff" : "#4B4B4B") }, styles.iconContainer]}>
        {
            //@ts-ignore
            <Icon name={name} size={26} color={(color !== "#FFF" ? "#BABABA" : "#4B4B4B")} />
        }
      </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 12,
        borderRadius: 15
    }
})