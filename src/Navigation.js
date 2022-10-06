import * as React from 'react';
import {useRef, useState} from 'react';
import {Text} from 'react-native';
import Login from './screen/Auth/Login';
import Register from './screen/Auth/Register';
import DrawerNav from './components/Drawer/DrawerNav';
import SplashScreen from './screen/SplashScreen';
import ModalNative from './components/Modal/Modal';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOption = {
    headerShown: false,
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOption}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="DrawerNav" component={DrawerNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
