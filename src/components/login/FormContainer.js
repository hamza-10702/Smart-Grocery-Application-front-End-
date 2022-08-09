import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

export default function FormContainer({children}) {
  return(
     
    <KeyboardAvoidingView 
    // keyboardVerticalOffset={200}
    behavior='position'
    style = {styles.container}>
      {children}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems : 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
});
