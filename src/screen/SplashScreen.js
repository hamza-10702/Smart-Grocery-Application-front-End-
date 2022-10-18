import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {useEffect} from 'react';

export default function SplashScreen() {
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  getUserDetails = async () => {
    console.log('user Login');
  };
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['white', 'white', 'white']} style={styles.linearGradient}>
      <Text>Sign in with Facebook</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#f1229f'
  },
  
});
