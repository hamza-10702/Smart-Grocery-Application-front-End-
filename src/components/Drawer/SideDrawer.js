import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './CustomDrawer';
import DashBoard from '../../screen/DashBoard';
import ChangePassword from '../../screen/ChangePassword';
import SplashScreen from '../../screen/SplashScreen';

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: '#054f4f'},
        headerTintColor: 'white',
        drawerActiveBackgroundColor: '#054f4f',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
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
      <Drawer.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-home" size={15} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
