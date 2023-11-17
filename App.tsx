import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/routes/Tabs';
import Tts from 'react-native-tts';
import Presentation from './src/routes/InGame/Presentation';

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
              name='Presentation' 
              component={Presentation} 
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
