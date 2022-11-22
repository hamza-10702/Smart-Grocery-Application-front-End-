import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signUpValidationSchema} from '../../Schema/index';
import Header from '../../components/login/Header';
import Toaster, {toastConfig} from '../../components/Toaster/Toaster';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {useEffect} from 'react';
import {useSignUpMutation} from '../../services/userAuthentication';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function Registger() {
  const baseURL = 'https://smart-grocery-application.herokuapp.com';
  const headers = {
    'Content-Type': 'application/json',
  };

  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [registerUser] = useSignUpMutation();

  const handleSubmit = async values => {
    try {
      const {fullName, email, password, confirmPassword} = values;
      if (fullName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          const formData = {fullName, email, password, confirmPassword};
          console.log(formData, 'form');

          const response = await registerUser(formData);
          // const response = await axios.post(baseURL, formData, {headers});
          if (response.data.status === 'Success') {
            console.log(response);
          } else {
            console.log(response.data.Message);
          }
        } else {
          console.log("Password and Confirm Password doesn't match");
          // Toast.show({
          //   type: 'warning',
          //   position: 'top',
          //   topOffset: 0,
          //   text1: "Password and Confirm Password doesn't match",
          // });
        }
      } else {
        console.log('All Fields are required');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Header name={'Login'} />
      </View>

      <View style={styles.formContainer}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={initialValues}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, values, errors, isValid}) => (
            <View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="person-outline" size={20} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      type="focused"
                      name="fullName"
                      label="Username"
                      style={styles.textInput}
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                      activeUnderlineColor="#054f4f"
                    />
                  </View>
                </View>
                {errors.fullName && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.fullName}
                  </Text>
                )}
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="mail-outline" size={20} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      type="focused"
                      name="email"
                      label="Email"
                      style={styles.textInput}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      activeUnderlineColor="#054f4f"
                    />
                  </View>
                </View>
                {errors.email && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.email}
                  </Text>
                )}

                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="lock-closed-outline" size={25} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      type="flat"
                      name="password"
                      label="Password"
                      style={styles.textInput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      activeUnderlineColor="#054f4f"
                      secureTextEntry={passwordVisible}
                      right={
                        <TextInput.Icon
                          name={passwordVisible ? 'eye-off' : 'eye'}
                          onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                      }
                    />
                  </View>
                </View>
                {errors.password && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.password}
                  </Text>
                )}
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Ionicons name="lock-closed-outline" size={25} />
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      type="flat"
                      name="confirmPassword"
                      label="Confirm Password"
                      style={styles.textInput}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      activeUnderlineColor="#054f4f"
                      secureTextEntry={passwordVisible}
                      right={
                        <TextInput.Icon
                          name={passwordVisible ? 'eye-off' : 'eye'}
                          onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                      }
                    />
                  </View>
                </View>
                {errors.confirmPassword && (
                  <Text style={{fontSize: 12, color: 'red', marginLeft: 20}}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
              <View style={styles.loginButton}>
                <Button
                  disabled={!isValid}
                  style={{
                    backgroundColor: '#054f4f',
                  }}
                  mode="contained"
                  onPress={() => {
                    handleSubmit(values);
                  }}>
                  SIGN UP
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
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
    height: 380,
    width: '90%',
    backgroundColor: 'white',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
