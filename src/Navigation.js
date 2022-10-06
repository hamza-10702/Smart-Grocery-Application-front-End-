import * as React from 'react';
import {useRef, useState} from 'react';
import {Text} from 'react-native';
import Login from './screen/Auth/Login';
import Register from './screen/Auth/Register';
import SplashScreen from './screen/SplashScreen';
import ModalNative from './components/Modal/Modal';
import {NavigationContainer} from '@react-navigation/native';
import SideDrawer from './components/Drawer/SideDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOption = {
    headerShown: false,
  };

  return (
    <>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOption}>
        <Stack.Screen name="SideDrawer" component={SideDrawer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </>
  );
}
