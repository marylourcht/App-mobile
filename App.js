// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Femme from './Femme';
import Homme from './Homme';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Home} options={{ headerShown: false }}  />
        <Stack.Screen name="Femme" component={Femme} />
        <Stack.Screen name="Homme" component={Homme} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;