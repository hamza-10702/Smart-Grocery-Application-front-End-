import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import FormContainer from './FormContainer';

export default function Login() {
  return (
    <FormContainer>
      <Text style={{fontWeight :'bold' , alignItems : 'flex-start',}}>Email:</Text>
      <TextInput 
      placeholder='Enter Email'
      style={{
        borderWidth : 1,
        borderColor: 'black',
        height : 40,
        borderRadius : 8,
        fontSize : 16,
        paddingLeft : 10,
      
      }}
      ></TextInput>
      <Text style={{fontWeight :'bold' , alignItems : 'flex-start',}}>Email:</Text>
      <TextInput 
      placeholder='Enter Email'
      secureTextEntry
      style={{
        borderWidth : 1,
        borderColor: 'black',
        height : 40,
        borderRadius : 8,
        fontSize : 16,
        paddingLeft : 10,
        
      }}
      ></TextInput>
    </FormContainer>
  
  );
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    alignItems : 'center',
    width : Dimensions.get('window').width
  }
});
