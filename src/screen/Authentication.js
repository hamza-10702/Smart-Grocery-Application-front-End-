import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import HeaderImage from '../components/login/HeaderImage';
import HeaderButton from '../components/login/HeaderButton';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';

export default function Authentication() {
  return (
    // <View>
    <ScrollView>
      <View style={{height: 300}}>
        <HeaderImage
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="Smart Grocery Application"
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <HeaderButton
          backgroundColor="rgba(27,27,51,1)"
          style={styles.borderLeft}
          title="Login"
        />
        <HeaderButton
          backgroundColor="rgba(27,27,51,0.4)"
          style={styles.borderRight}
          title="Sign up"
        />
      </View>
      <View>
        <Login />

        <KeyboardAvoidingView>
          <SignUp />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
