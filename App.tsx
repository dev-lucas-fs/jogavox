import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './src/routes/DownloadScreen';
import Tabs from './src/routes/Tabs';
import Tts from 'react-native-tts';

const Stack = createNativeStackNavigator();
Tts.setDefaultLanguage("pt-BR");

function App({ children }: React.PropsWithChildren) {


  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }} 
            initialRouteName="Tabs">
          <Stack.Screen 
              name='Tabs' 
              component={Tabs} 
          />
          <Stack.Screen 
              name='Settings' 
              component={SettingsScreen} 
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
