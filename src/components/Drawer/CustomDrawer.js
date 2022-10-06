import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function CustomDrawer({...props}) {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
    console.log('Logout');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: 'yellow',
        }}>
        <View style={{width: '100%', height: 200}}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 15,
              alignItems: 'flex-end',
              height: '100%',
              paddingBottom: 20,
            }}>
            <View>
              <View
                style={{
                  height: 120,
                  width: 120,
                  backgroundColor: 'cyan',
                  borderRadius: 60,
                  borderWidth: 1,
                }}></View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {`Hafiz Hamza`}
              </Text>
              <Text style={{fontSize: 16}}>hamza@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: '#ccc',
          borderTopWidth: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <View>
          <TouchableOpacity onPress={handleLogout}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  fontWeight: '700',
                  marginLeft: 5,
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
