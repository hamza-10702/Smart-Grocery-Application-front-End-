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
        contentContainerStyle={
          {
            //   backgroundColor: '#0a9f9f4a',
          }
        }>
        <View
          style={{
            width: '100%',
            height: 200,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            backgroundColor: '#0a9f9f4a',
            marginTop: -6,
          }}>
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
                  height: 100,
                  width: 100,
                  backgroundColor: 'cyan',
                  borderRadius: 50,
                  //   borderWidth: 1,
                }}></View>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {`Hafiz Hamza`}
              </Text>
              <Text style={{fontSize: 16}}>hamza@gmail.com</Text>
            </View>
          </View>
          <View style={{}}></View>
        </View>

        <View style={{backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>

        <DrawerItem
          label="slide"
          Style={{
            backgroundColor: 'white',
          }}
          icon={({color, size}) => (
            <Ionicons color={color} size={15} name={`ios-home`} />
          )}
          onPress={() => navigation.navigate('carousel')}
        />
        <DrawerItem
          label="Change Password"
          Style={{
            backgroundColor: 'white',
          }}
          icon={({color, size}) => (
            <Ionicons color={color} size={15} name={`ios-home`} />
          )}
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <DrawerItem
          label="Splash Screen"
          Style={{
            backgroundColor: 'white',
          }}
          icon={({color, size}) => (
            <Ionicons color={color} size={15} name={`ios-home`} />
          )}
          onPress={() => navigation.navigate('SplashScreen')}
        />
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
