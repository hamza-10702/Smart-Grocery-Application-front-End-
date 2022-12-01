import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './CustomDrawer';
import DashBoard from '../../screen/DashBoard';
import SplashScreen from '../../screen/SplashScreen';
import TopSearchBar from '../TopSearchBar';

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#0052529e',
          backgroundColor: 'red',
          height: 50,
        },
        headerShown: false,
        // drawerHideStatusBarOnOpen: true,

        headerTintColor: 'white',

        drawerActiveTintColor: 'black',
        drawerLabelStyle: {
          // marginLeft: -20,
          fontSize: 13,
        },
      }}>
      <Drawer.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
