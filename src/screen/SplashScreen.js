import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { useEffect } from 'react';
import TopSearchBar from '../components/TopSearchBar';
import AppStatusBar from '../components/AppStatusBar'
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../services/authorizationToken';

export default function SplashScreen() {
  const navigation = useNavigation();


  performTimeConsumingTask = async () => {

  };

  useEffect(() => {
    getUserDetails();
  }, []);


  getUserDetails = async () => {
    let screen;
    const token = await getToken();
    if (token) {
      screen = 'SideDrawer';
    } else {
      screen = 'Login';
    }
    console.log(token)
    setTimeout(() => {
      navigation.navigate(screen)
    }, 3000);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppStatusBar backgroundColor='white' barStyle="dark-content" hidden={true} />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center'
      }}>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/logo.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '70%',
    height: 190,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
