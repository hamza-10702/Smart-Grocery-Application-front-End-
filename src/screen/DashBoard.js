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
import AppStatusBar from '../components/AppStatusBar';


  export default function DashBoard(){
    return (
        <View>
            <AppStatusBar backgroundColor='#0052529e'  barStyle="light-content" />
            <Text>
                Hellow DashBoard
            </Text>
        </View>
    )
  } 

