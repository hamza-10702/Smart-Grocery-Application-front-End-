import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import AuthenticationContainer from './AuthenticationContainer';

export default function Login() {
  return (
    <AuthenticationContainer>
      <Text
        style={styles.signUpText}>
        Sign Up
      </Text>
    </AuthenticationContainer>
  );
}

const styles = StyleSheet.create({
  signUpText: {
    fontSize: 50,
    fontWeight: '700',
    color: 'red',
  },
});
