import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from './src/screens/start';
import {HomeScreen} from './src/screens/home';
import DetailsScreen from './src/screens/details';
import {RootStackParamList} from './src/utils/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Pokedex" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{id: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
