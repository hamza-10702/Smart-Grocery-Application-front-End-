import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginValidationSchema} from '../Schema/index';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStatusBar from '../components/AppStatusBar';

const initialValues = {
  password: '',
  confirmPassword: '',
};

export default function Landing() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#c0d3d3'}}>
      <AppStatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={true}
      />
      <View
        style={{
          backgroundColor: '#9bb9b9',
          height: '40%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <ImageBackground
          source={require('../assets/images/4.jpg')}
          resizeMode="stretch"
          imageStyle={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: "center"
          }}>
          <View style = {{ backgroundColor: "#000000c0"}}></View>
        </ImageBackground>
        {/* <Image
            source={require('../assets/images/4.jpg')}
            style={{
              resizeMode: 'contain',
              width: '100%',
              height: '100%',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              color: 'red'
            }}
          /> */}
      </View>
      <View
        style={{
          backgroundColor: '#c0d3d3',
          height: '60%',
        }}>
        {/* <View style={styles.formContainer}></View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  formContainer: {
    borderColor: 'gray',
    alignSelf: 'center',
    height: 300,
    width: '90%',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  loginButton: {
    marginTop: 20,
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});

{
  /* <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              fontFamily: 'sans-serif-condensed',
              paddingBottom: 20,
            }}>
            Change Password
          </Text> */
}
