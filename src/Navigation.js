import * as React from 'react';
import {useRef, useState} from 'react';
import {Text} from 'react-native';
import Login from './screen/Auth/Login';
import Register from './screen/Auth/Register';
import DashBoard from './screen/DashBoard';
import AboutItem from './screen/AboutItem';
import SplashScreen from './screen/SplashScreen';
import ChangePassword from './screen/ChangePassword';
import ListScan from './screen/ListScan';
import ScanList from './screen/ScanList';
import ScanImage from './screen/ScanImage';
import ModalNative from './components/Modal/Modal';
import Carousel from './components/carouselSlider';
import {NavigationContainer} from '@react-navigation/native';
import SideDrawer from './components/Drawer/SideDrawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './screen/Cart';

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
        <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
        <Stack.Screen
        name="carousel"
        component={Carousel}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
        <Stack.Screen
         name="AboutItem"
         component={AboutItem}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
        <Stack.Screen
         name="Cart"
         component={Cart}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
        <Stack.Screen
         name="ScanList"
         component={ScanList}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
        <Stack.Screen
         name="ScanImage"
         component={ScanImage}
        options={{
          headerBackVisible: true,
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
      </Stack.Navigator>
    </>
  );
}