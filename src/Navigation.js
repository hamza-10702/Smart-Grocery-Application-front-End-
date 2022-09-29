import React, {useRef, useState} from 'react';
import {
  Text,
} from 'react-native';
import Login from './screen/Auth/Login';
import Register from './screen/Auth/Register';
import SplashScreen from './screen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();



    const screenOption = {
       headerShown: false, 
    }

  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={screenOption}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  </>;
}
