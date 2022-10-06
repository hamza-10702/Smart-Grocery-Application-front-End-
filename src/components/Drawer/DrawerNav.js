import * as React from 'react';
import {useRef, useState} from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashBoard from '../../screen/DashBoard';
// import SplashScreen from './screen/SplashScreen';
// import Login from './screen/Auth/Login';
import Register from '../../screen/Auth/Register';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  <Drawer.Navigator>
    <Drawer.Screen name="DashBoard" component={DashBoard} />
    <Drawer.Screen name="Register" component={Register} />
  </Drawer.Navigator>;
}
