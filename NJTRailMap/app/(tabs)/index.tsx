import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../components/HomeScreen'; // Adjust the path if necessary
import MapScreen from '../../components/MapScreen'; // Adjust the path if necessary

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen} 
          options={{ title: 'New Jersey Map' }} 
        />
      </Stack.Navigator>
    </>
  );
};

export default App;
