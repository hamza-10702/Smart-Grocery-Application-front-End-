import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import DrawerNav from '../components/Drawer/DrawerNav'

  export default function DashBoard(){
    return (
        <View>
            <DrawerNav/>
            <Text>
                Hellow DashBoard
            </Text>
        </View>
    )
  } 

