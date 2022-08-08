import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

export default function AuthenticationContainer({children}) {
  <KeyboardAvoidingView
    enabled
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={styles.container}>
    {children}
  </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
});
