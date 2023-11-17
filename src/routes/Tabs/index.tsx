import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibraryScreen from '../LibraryScreen';
import Icon from 'react-native-vector-icons/Feather';
import Layout from './Layout';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import DownloadScreen from '../DownloadScreen';

const Tab = createBottomTabNavigator();

function Tabs({ children }: React.PropsWithChildren) {


  return (
    <Tab.Navigator 
        screenOptions={{
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
        <Tab.Screen 
            name="Biblioteca" 
            component={Library} 
            options={{
              tabBarIcon: ({ size, color }) => <CustomIcon name='home' color={color} />
            }}
            />
        <Tab.Screen 
            name="LojaVox" 
            component={Download} 
            options={{
              tabBarIcon: ({ size, color }) => <CustomIcon name='shopping-bag' color={color} />
            }}
            />
    </Tab.Navigator>
  );
}

function CustomIcon({ color, name } : { color: string, name: string }) {
  return (
    <View style={[{ backgroundColor: (color === "#FFF" ? "#fff" : "#4B4B4B") }, styles.iconContainer]}>
      <Icon name={name} size={26} color={(color !== "#FFF" ? "#BABABA" : "#4B4B4B")} />
    </View>
  )
}


const Library = () => (
  <Layout title='Biblioteca'>
    <LibraryScreen />
  </Layout>
);

const Download = () => (
    <Layout title='LojaVox'>
      <DownloadScreen />
    </Layout>
);

const styles = StyleSheet.create({
  iconContainer: {
    padding: 12,
    borderRadius: 15
  }
})

export default Tabs;
